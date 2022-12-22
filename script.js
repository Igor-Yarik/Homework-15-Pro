function viewUserForm() {
    document.querySelector(".user__form").style.display = "block";
    document.querySelector(".description").style.display = "none";
};

function closeUserForm() {
    document.querySelector(".user__form").style.display = "none";
    document.querySelector(".description").style.display = "block";
};