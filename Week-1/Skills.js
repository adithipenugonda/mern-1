//write a function that receives "skills" array and "skillname" as arguments and return the index if skillname existed, otherwise "skill not found"

function findSkill(skills, skillname) {
    for (let i = 0; i < skills.length; i++) {
        if (skills[i] === skillname) {
            return i;
        }
    }
    return "skill not found";
}

let skills = ["HTML", "CSS", "java"];
let result = findSkill(skills, "java");

console.log(result);
