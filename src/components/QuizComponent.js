import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

export default function QuizComponent() {
    const [correct, setCorrect] = React.useState('b');
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);

    const [helperText, setHelperText] = React.useState('One answer is correct.');

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (value === correct) {
            setHelperText('Correct answer!');
            setError(false);
        }  else {
            setHelperText('Wrong answer!');
            setError(true);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormControl sx={{ m: 3 }} error={error} variant="standard">
                <FormLabel id="demo-error-radios">Which library allows training and running models directly in the browser using a dedicated tool?</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-error-radios"
                    name="quiz"
                    value={value}
                    onChange={handleRadioChange}
                >
                    <FormControlLabel value="a" control={<Radio />} label="PyTorch" />
                    <FormControlLabel value="b" control={<Radio />} label="TensorFlow" />
                    <FormControlLabel value="c" control={<Radio />} label="NumPy" />
                    <FormControlLabel value="d" control={<Radio />} label="Pandas" />
                </RadioGroup>
                <FormHelperText>{helperText}</FormHelperText>
                <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                    Next question
                </Button>
            </FormControl>
        </form>
    );
}
