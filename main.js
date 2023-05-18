document.getElementById('apply_btn_add').addEventListener('click',function () {
    const addAreaId = document.getElementById('friends');
    const newElement = document.createElement('div');
    newElement.classList.add('friend');
    newElement.innerHTML = `
    <h3 class="friend-name"> new friend </h3>
    <p>Voluptatibus numquam eum accusamus animi? </p>
    `;
    addAreaId.appendChild(newElement);
})

document.getElementById('apply_btn').addEventListener('click',function(){
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'red';
    }
});

document.getElementById('apply_btn_center').addEventListener('click',function () {
    const center = document.getElementById('third');
    center.style.textAlign = 'center';
});

