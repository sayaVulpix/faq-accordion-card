// const getAnswer = document.querySelectorAll('.faq');

// for (i=0; i<getAnswer.length; i++){
// getAnswer[i].addEventListener('click',function(){
//    this.classList.toggle('active');
// })
// }

const getAnswer = document.querySelectorAll('.faq');

getAnswer.forEach(answer =>{
    answer.addEventListener('click', function(){
        if(answer.classList.contains('active')){
            answer.classList.toggle('active')
        }else {
            getAnswer.forEach(answer => answer.classList.remove('active'))
            answer.classList.add('active')
        }
    })
})
