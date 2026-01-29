// 1. Validate task title (not empty, min 3 chars)

export function validateTitle(title) {
 // Your code here
 if(title.length===0)
 {
    return "Title is empty"
 }
 if(title.length<3)
 {
    return "Title should have min of 3 chars"
 }
 return true;
 }
                      
// 2. Validate priority (must be: low, medium, high)
export function validatePriority(priority) {
// Your code here
}
                      
// 3. Validate due date (must be future date)
export function validateDueDate(date) {
// Your code here
}
