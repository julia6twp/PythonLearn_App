from locust import HttpUser, task, between

class LoadTestUser(HttpUser):
    wait_time = between(1, 5)  # Czas pomiędzy żądaniami (1-5 sekund)

    @task
    def get_levels(self):
        self.client.get("/get-levels/")  # Ścieżka do funkcji get_levels