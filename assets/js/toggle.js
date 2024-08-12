

function toggleVisibility(toggle) {
    try {
        if (toggle.classList.contains('hidden')) {
            toggle.classList.remove('hidden');
            toggle.classList.add('visible');
            return true;
        } else{
            return false;
        }
    } catch (error) {
        console.log(error);
    }
}
export function closeToggle(toggle){
    try {
        if (toggle.classList.contains('visible')) {
            toggle.classList.remove('visible');
            toggle.classList.add('hidden');
            return true;
        }
        else{
            return false;
        }
    } catch (error) {
        console.log(error);
    }

}
export function toggle(element,toggle){
    try {
        element.addEventListener('click', (e)=>{
            e.preventDefault();
            if (closeToggle(toggle)){
                return closeToggle(toggle);
            }else{
                return toggleVisibility(toggle);
            }
            
        });
    } catch (error) {
        console.log(error);
    }

}