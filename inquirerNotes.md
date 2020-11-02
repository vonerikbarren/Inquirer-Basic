# Inquirer Personal Notes

# Need a prompt command
 inquierer
  .prompt([

  ]);

- Once the prompt is done, you can say what can happen with the information submitted.
  
``` js

inquirer
  .prompt([

  ])
  .then(function (inquirerResponse ) {
    if (inquirerResponse.confirm) {
      console.log()
    }
    else {
      console.log()
    }
  });

```


## The different types of prompts

There are different types of prompts and based on the prompts there are different kinds of options. 
However each prompt has [ type, name ].
The following example code shows inputs that can be copied and pasted for actual code. 
The different types are also listed below. 

``` js

inquirer
  .prompt([
    // Prompt Type: Basic Text Prompt
    {
      type: "input",
      message: "What is your first name?",
      name: "FirstName"
    },
    // Prompt Type: Password Prompt
    {
      type: "password",
      message: "Set your Password...",
      name: "password"
    },
     // Prompt Type: List Prompt
    {
      type: "list",
      message: "Which Pokemon Do you Choose?",
      choices: ["Pikachu", "Charmander", "Squirtle", "Bulbasaur"],
      name: "Pokemon Choice"
    },
     // Prompt Type: rawlist Prompt
    {
      type: "rawlist",
      message: "What size Pizza do you desire?",
      chocies: ["Jumbo", "Large", "Standard", "Medium", "Small", "Micro"],
      name: "FirstName"
    },
     // Prompt Type: Basic Text Prompt
    {
      type: "input",
      message: "What is your first name?",
      name: "FirstName"
    },
  ])
  .then(function (inquirerResponse ) {
    if (inquirerResponse.confirm) {
      console.log()
    }
    else {
      console.log()
    }
  });

```