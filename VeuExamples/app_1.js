let userGoalInput = document.getElementById("goal");
let addButt = document.querySelector('button');
let goalList = document.querySelector('ul');

function onNewGoalAdded(){
    let inputedGoal = userGoalInput.value;
    if(inputedGoal){

        let newListItem = document.createElement('li');
        newListItem.textContent = inputedGoal;
        goalList.appendChild(newListItem);
        userGoalInput.value = '';
    }
}

addButt.addEventListener('click', onNewGoalAdded);