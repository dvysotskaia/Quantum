$(document).ready(function () {

    const selectAllElements = document.querySelectorAll("[data-select]");

    selectAllElements.forEach(function(item){
        item.addEventListener("click", function(){
            const realSelect = this.nextElementSibling;
            // console.log(this);
            // console.log(realSelect);

            //Если кликнули по пунктам в дропдауне
            if(event.target.hasAttribute("data-select-item")){

                var itemTitle = event.target.getAttribute("data-select-item");
                this.querySelector("[data-select-title]").textContent = itemTitle;

                this.querySelector(".header-select__dropdown").classList.toggle("hidden");


                //Связка с реальным селектом
                //Изменяем значение value у реального селекта
                if(realSelect){
                    realSelect.value = itemTitle;
                }


            }else{
                //Если кликнули по пунктам в дропдауне
                // Скрываем или открываем дропдаун
                this.querySelector(".header-select__dropdown").classList.toggle("hidden");
            }

        });

        $("#carousel-header").owlCarousel({
            items: 1,
            nav: true,
            navText: '',
            loop: true
        });
    });




    //
    // //Первый вариант для одного селекта на странице!!!!
    // //Нашли контейнер с селектом
    // const selectElement = document.querySelector("[data-select]");
    // //Нашли реальный селект
    // const selectReal = document.querySelector("#selectReal");
    //
    // //Прослушиваем клик внутри контейнера с селектом
    // selectElement.addEventListener("click", function(event) {
    //     // console.log(event);
    //     // console.log(event.target);
    //
    //     //Проверка где произошёл клик
    //     //event.target - показывает на каком именно HTML элементе произошёл клик
    //     //Если кликнули по пункту внутри дропдауна
    //     if (event.target.hasAttribute("data-select-item")) {
    //         console.log("Click on ITEM");
    //
    //         //Получаем значение из атрибута data-select-item у этого элемента
    //         const itemTitle = event.target.getAttribute("data-select-item");
    //         console.log(itemTitle);
    //
    //         //Находим заголовок и меняем его на значение из выбранного пункта
    //         event.target.closest("[data-select]").querySelector("[data-select-title]").textContent = itemTitle;
    //         //Скрываем дропдаун
    //         event.target.closest("[data-select]").querySelector(".header-select__dropdown").classList.toggle(
    //             "hidden"
    //         );
    //
    //         //Связка с реальным селектом
    //         //Изменяем значение value у реального селекта
    //         selectReal.value = itemTitle;
    //
    //     } else {
    //         //Иначе: клик произошёл НЕ по элементу в дропдауне.
    //         // Значит это title или область вокруг него
    //         console.log("Click on TITLE and Around");
    //         // Скрываем или открываем дропдаун
    //         this.querySelector(".header-select__dropdown").classList.toggle(
    //             "hidden"
    //         );
    //     }
    // });
});