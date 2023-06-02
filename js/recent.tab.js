const taskTogglerBtn = document.querySelector('.landing-task-toggle-btn');
const taskTogglerIcon = document.querySelector('.landing-task .landing-task-toggle-btn i');


const landingScore = document.querySelector('.landing-task .score');
const landingTasks = document.querySelector('.landing-task .tasks');
const landingInfos = document.querySelector('.landing-task .infos');


const landingSingleTask = document.querySelectorAll('.landing-task .tasks .single-task');
const landingSingleInfos = document.querySelectorAll('.landing-task .infos .single-infos');



const animatedIcons = document.querySelector('.tasks .animation-icons');


taskTogglerBtn.addEventListener('click', () => {

    taskTogglerIcon.classList.toggle('fa-chevron-up');
    if(landingScore.classList.contains('collapsed-score')){


        setTimeout(()=>{
            landingScore.classList.remove('collapsed-score');
            landingTasks.classList.remove('collapsed-tasks');
            landingInfos.classList.remove('collapsed-infos');
            animatedIcons.style.cssText = 'animation: .2s ease-in animatedIconsOut;'
        },280)
        landingScore.style.cssText = 'animation: .3s ease-in collapsedAnimationOpen;'
        landingTasks.style.cssText = 'animation: .3s ease-in collapsedAnimationOpen;'
        landingInfos.style.cssText = 'animation: .3s ease-in collapsedAnimationOpen;'

        


    }else{
        setTimeout(()=>{
            landingScore.classList.add('collapsed-score');
            landingTasks.classList.add('collapsed-tasks');
            landingInfos.classList.add('collapsed-infos');
        },280)
        landingScore.style.cssText = 'animation: .3s ease-in collapsedAnimationClose;'
        landingTasks.style.cssText = 'animation: .3s ease-in collapsedAnimationClose;'
        landingInfos.style.cssText = 'animation: .3s ease-in collapsedAnimationClose;'

        animatedIcons.style.cssText = 'animation: .3s ease-in animatedIconsIn;'

    }

})


for(let i=0; i<landingSingleTask.length; i++){


    landingSingleTask[i].addEventListener('click',()=>{
        for(let i=0; i<landingSingleTask.length; i++){
            landingSingleTask[i].classList.remove('active');
            landingSingleInfos[i].style.display = 'none';
        }
        landingSingleTask[i].classList.add('active');
        landingSingleInfos[i].style.display = 'flex';

    })


}


landingSingleInfos[0].style.display = 'flex';







