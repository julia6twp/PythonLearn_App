import subprocess
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import os
from django.http import JsonResponse
from pymongo import MongoClient

import subprocess
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import bcrypt

@csrf_exempt
def execute_code(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            user_code = data.get('code', '')

            user_code_path = "/backend/be/user_code.py"
            with open(user_code_path, "w") as file:
                file.write(user_code)


            build_command = ["docker", "build", "-t", "python-runner", "E:/inżynierka/be/be"]
            build_result = subprocess.run(build_command, capture_output=True, text=True)

            if build_result.returncode != 0:
                return JsonResponse({
                    'status': 'error',
                    'error': build_result.stderr
                }, status=400)

            run_command = ["docker", "run", "--rm", "python-runner"]
            run_result = subprocess.run(run_command, capture_output=True, text=True)

            console_output = run_result.stdout.strip()
            exit_code = run_result.returncode

            if exit_code != 0:
                return JsonResponse({
                    'status': 'error',
                    'error': run_result.stderr,
                    'console_output': console_output,
                    'exit_code': exit_code
                }, status=400)

            return JsonResponse({
                'status': 'success',
                'console_output': console_output,
                'exit_code': exit_code
            })

        except Exception as e:
            return JsonResponse({
                'status': 'error',
                'error': str(e)
            }, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)


def get_levels(request):
    client = MongoClient("mongodb://localhost:27017/")
    db = client["my_database"]
    tasks_collection = db["tasks"]

    pipeline = [
        {"$group": {"_id": "$difficulty", "count": {"$sum": 1}}}
    ]
    levels_data = list(tasks_collection.aggregate(pipeline))

    response_data = {
        level["_id"]: level["count"]
        for level in levels_data
    }

    return JsonResponse(response_data)



def get_level_details(request, difficulty, level):
    try:
        client = MongoClient("mongodb://localhost:27017/")
        db = client["my_database"]
        tasks_collection = db["tasks"]

        task = tasks_collection.find_one({"difficulty": difficulty, "level": int(level)})

        if not task:
            return JsonResponse({"error": "Task not found"}, status=404)

        response_data = {
            "difficulty": task["difficulty"],
            "level": task["level"],
            "task": task["task"],
            "answer": task["answer"]
        }

        return JsonResponse(response_data)

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)


@csrf_exempt
def register_user(request):
    if request.method == 'POST':
        try:
            client = MongoClient("mongodb://localhost:27017/")
            db = client["my_database"]
            users_collection = db["users"]

            data = json.loads(request.body)
            login = data.get("login")
            password = data.get("password")

            if users_collection.find_one({"login": login}):
                return JsonResponse({"status": "error", "message": "User already exists"}, status=400)

            hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

            users_collection.insert_one({
                "login": login,
                "password": hashed_password.decode('utf-8'),
                "achievements": []
            })

            return JsonResponse({"status": "success", "message": "User registered successfully"})

        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=500)
    else:
        return JsonResponse({"status": "error", "message": "Invalid request method"}, status=405)


@csrf_exempt
def login_user(request):
    if request.method == 'POST':
        try:
            client = MongoClient("mongodb://localhost:27017/")
            db = client["my_database"]
            users_collection = db["users"]

            data = json.loads(request.body)
            login = data.get("login")
            password = data.get("password")

            user = users_collection.find_one({"login": login})
            if not user:
                return JsonResponse({"status": "error", "message": "Invalid login or password"}, status=400)

            if bcrypt.checkpw(password.encode('utf-8'), user["password"].encode('utf-8')):
                return JsonResponse({"status": "success", "message": "Login successful", "achievements": user["achievements"]})
            else:
                return JsonResponse({"status": "error", "message": "Invalid login or password"}, status=400)

        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=500)
    else:
        return JsonResponse({"status": "error", "message": "Invalid request method"}, status=405)


@csrf_exempt
def update_achievements(request):
    if request.method == 'POST':
        try:
            client = MongoClient("mongodb://localhost:27017/")
            db = client["my_database"]
            # db = client["test_database"]
            users_collection = db["users"]

            data = json.loads(request.body)
            login = data.get("login")
            new_achievement = data.get("achievement")

            result = users_collection.update_one(
                {"login": login},
                {"$addToSet": {"achievements": new_achievement}}  # Dodaje tylko, jeśli nie istnieje
            )

            if result.modified_count > 0:
                return JsonResponse({"status": "success", "message": "Achievement updated"})
            else:
                return JsonResponse({"status": "error", "message": "User not found or achievement already exists"}, status=400)

        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=500)
    else:
        return JsonResponse({"status": "error", "message": "Invalid request method"}, status=405)
