function remove_character(str, char_pos) {
    return str.substring(0, char_pos) + str.substring(char_pos + 1);
}

console.log(remove_character("Javascript",0));
console.log(remove_character("Python",3));
console.log(remove_character("Python",5));
 
/* Output: 
avascript
Pyton
Pytho
*/