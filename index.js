#! /usr/bin/env node
import inquirer from "inquirer";
console.log("<======> Welcome to Contact Number Menu! <======>");
let contacts = [];
let contactsSerialNo = 1;
async function contactMenuInput() {
    const inputContact = await inquirer.prompt({
        type: "list",
        name: "contact",
        message: "select your option",
        choices: ["Add Contact", "View Contact", "Close Menu"]
    });
    let { contact } = inputContact; // desctructuring
    if (contact === "Add Contact")
        addContact();
    if (contact === "View Contact")
        viewContact();
    if (contact === "Close Menu")
        console.log('\nthank you for using contact menu!');
}
;
contactMenuInput();
async function addContact() {
    const inputContactDetails = await inquirer.prompt([
        {
            type: 'input',
            name: 'personName',
            message: "Enter Person Name!"
        },
        {
            type: 'number',
            name: 'phoneNumber',
            message: "Enter Contact Number"
        }
    ]);
    const { personName, phoneNumber } = inputContactDetails;
    contacts.push({ ID: contactsSerialNo++, Name: personName, PhoneNo: phoneNumber });
    console.log(`\nNew contact number has been added\n`);
    contactMenuInput();
}
function viewContact() {
    if (contacts.length > 0)
        contacts.forEach((user) => console.log(`${user.ID}. person Name: ${user.Name} ---- Contact Number: ${user.PhoneNo}`));
    else
        console.log('\nContact not available!');
    contactMenuInput();
}
