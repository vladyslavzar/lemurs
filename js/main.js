
window.onload = function() {
    
    const serviceItems = document.querySelectorAll('.services__container__main__inner__row__item');

    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList = 'services__container__main__inner__row__item --itemActive';
        })
        item.addEventListener('mouseleave', () => {
            item.classList = 'services__container__main__inner__row__item';
        })
    })

    const observer = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
          // If the element is visible
          if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('animtype');
          }
        });
      });
      document.querySelectorAll('.typinganimation').forEach(item => {
        observer.observe(item);
      })
    const observerNew = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('lemurSlide');
        }
    });
    });
    observerNew.observe(document.querySelector('.lemurAnim'));
    
      
    var speed = 5;

    /* Call this function with a string containing the ID name to
     * the element containing the number you want to do a count animation on.*/
    function incEltNbr(id) {
      elt = document.getElementById(id);
      endNbr = Number(document.getElementById(id).innerHTML);
      incNbrRec(0, endNbr, elt);
    }
    
    /*A recursive function to increase the number.*/
    function incNbrRec(i, endNbr, elt) {
      if (i <= endNbr) {
        elt.innerHTML = i;
        setTimeout(function() {//Delay a bit before calling the function again.
          incNbrRec(i + 1, endNbr, elt);
        }, speed);
      }
    }
    
    
    const observerNewNew = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
                incEltNbr(entry.target.id);
            }
        });
        });
        document.querySelectorAll('.numbInc').forEach(item => {
            observerNewNew.observe(item);
          })
};



