const filters = document.querySelectorAll('.filter p');
// const filterChilds = filters.childElementCount;
// console.log(filterChilds);
const firstFilter = filters.firstChild;
// console.log(firstFilter);
// console.log(filters);
const daily = Array.from(document.querySelectorAll('.daily'));
// console.log(daily);
const weekly = Array.from(document.querySelectorAll('.weekly'));
// console.log(weekly);
const monthly = Array.from(document.querySelectorAll('.monthly'));
// console.log(monthly);

// const $filters = $('.filter');
// console.log($filters);

filters.forEach(p => {
    p.addEventListener('click', e =>{
        // console.log(e.target);
        if (e.target.outerText === 'Daily') {
            clearSelection();
            e.target.classList.add('active');
            daily.forEach(element => {
                element.classList.remove('inactive');
            })
            weekly.forEach(element => {
                element.classList.add('inactive');
            })
            monthly.forEach(element => {
                element.classList.add('inactive');
            })
        }
        if (e.target.outerText === 'Weekly') {
            clearSelection();
            e.target.classList.add('active');
            daily.forEach(element => {
                element.classList.add('inactive');
            })
            weekly.forEach(element => {
                element.classList.remove('inactive');
            })
            monthly.forEach(element => {
                element.classList.add('inactive');
            })
        }
        if (e.target.outerText === 'Monthly') {
            clearSelection();
            e.target.classList.add('active');
            daily.forEach(element => {
                element.classList.add('inactive');
            })
            weekly.forEach(element => {
                element.classList.add('inactive');
            })
            monthly.forEach(element => {
                element.classList.remove('inactive');
            })
        }
    })
})


function clearSelection() {
    filters.forEach(e => {
        e.classList.remove('active');
    })
}