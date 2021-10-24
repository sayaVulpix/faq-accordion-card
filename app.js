// const checkAnswer =document.getElementsByClassName('faq')

// for(i = 0; i <checkAnswer.length; i++){
//     checkAnswer[i].addEventListener('click', function(){
//         this.classList.toggle('active')
//     })
// }

// const checkAnswer = document.querySelectorAll('.faq');
// checkAnswer.forEach(answer =>{
//     answer.addEventListener('click', function(){
//         if(answer.classList.contains('active')){
//             anwser.classList.toggle('active')
//         }else{
//             checkAnswer.forEach(answer => answer.classList.remove('active'))
//             answer.classList.add('active')
//         }
//     })
// })

// const getAnswer = document.querySelectorAll('.faq');
// getAnswer.forEach(answer =>{
//     answer.addEventListener('click', function(){
//         if(answer.classList.contains('active')){
//             answer.classList.toggle('active')
//         }else{
//             getAnswer.forEach(answer => answer.classList.remove('active'))
//             answer.classList.add('active')
//         }
//     })
// })





// const getAnswer = document.getElementsByClassName('faq');

// for(i=0; i<getAnswer.length; i++){
//     getAnswer[i].addEventListener('click', function(){
//        this.classList.toggle('active')
//     })
// }

// const getAnswer = document.querySelectorAll('.faq');

// getAnswer.forEach(answer => {
//     answer.addEventListener('click',function(){
//         if(answer.classList.contains('active')){
//             answer.classList.toggle('active')
//         }else {
//             getAnswer.forEach(answer => answer.classList.remove('active'))
//             answer.classList.add('active')
//         }
//     })
// })

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