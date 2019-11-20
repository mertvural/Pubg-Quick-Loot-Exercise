
Vue.use(VueDraggable.default);

var vue = new Vue({
  data() {
    const componentInstance = this;
    
    return {
      allSize : 0,
      counter : 3,
      durum : false,
      enterTab : true,
      lootArea : false,
      result : true,
      resultItem : false,
      grounds : [
        {
          imgSrc : "./images/7.62mm_-_Ammunition_-_PUBG.png",
          name : "7.62mm",
          piece : "100",
          size : 20
        },
        {
          imgSrc : "./images/m16.png",
          name : "M16",
          piece : null,
          size : 10
        },
        {
          imgSrc : "./images/AKM.png",
          name : "AKM",
          piece : null,
          size : 10
        },
        {
          imgSrc : "./images/ammo_556mm-deba07cd.png",
          name : "5.56mm",
          piece : "10",
          size : 10
        },
        {
          imgSrc : "./images/8x.png",
          name : "8x",
          piece : null,
          size : 10
        },
        {
          imgSrc : "./images/grenade.png",
          name : "Frag Grenade",
          piece : "1",
          size : 5
        },
        {
          imgSrc : "./images/Icon_weapon_Pan.png",
          name : "Pan",
          piece : null,
          size : 20
        },
        {
          imgSrc : "./images/Icon_attach_Lower_AngledForeGrip.png",
          name : "AngledForeGrip",
          piece : null,
          size : 10
        },
        {
          imgSrc : "./images/Icon_attach_Lower_Foregrip.png",
          name : "Foregrip",
          piece : null,
          size : 10
        },
        {
          imgSrc : "./images/Icon_Boost_EnergyDrink-New.png",
          name : "Boost",
          piece : null,
          size : 10
        },
        {
          imgSrc : "./images/Icon_Boost_PainKiller.png",
          name : "PainKiller",
          piece : null,
          size : 15
        },
        {
          imgSrc : "./images/Icon_Heal_MedKit.png",
          name : "HealMedKit",
          piece : null,
          size : 40
        },
        {
          imgSrc : "./images/smg-suppressor.png",
          name : "smgsuppressor",
          piece : null,
          size : 10
        },
        {
          imgSrc : "./images/healtbag.png",
          name : "First Aid Kit",
          piece : "4",
          size : 40
        },
        {
          imgSrc : "./images/heal_bandage-7c6aec40.png",
          name : "Bandage",
          piece : "1",
          size : 5
        }
      ],
      inTheBag : [       
        {
          imgSrc : "./images/healtbag.png",
          name : "First Aid Kit",
          piece : "1",
          size : 10
        },
        {
          imgSrc : "./images/Icon_attach.png",
          name : "4x",
          piece : null,
          size : 10
        },
        {
          imgSrc : "./images/Icon_weapon_Kar98k.png",
          name : "kar98",
          piece : null,
          size : 10
        },
        {
          imgSrc : "./images/7.62mm_-_Ammunition_-_PUBG.png",
          name : "7.62mm",
          piece : "120",
          size : 40
        }
        
      ],
      options: {
        dropzoneSelector: 'ul.inTheBag',
        onDrop(event) {
          componentInstance.changeSize();
        },
        onDragend(event) {
          componentInstance.someDummyMethod();
          if (!event.droptarget) {
            console.log('event is dropped out');
          }
        }
      }
    }
  },
  methods: {
    someDummyMethod() {

    },
    changeSize() {
      this.allSize = 0;
      this.inTheBag.forEach(el => {        
        this.allSize += el.size
      });

    },
    counterStart() {
      this.durum = true;
      this.lootArea = true;
      let $this = this;      
      var myVar = setInterval(myTimer, 1000);

      function myTimer() {
        if($this.counter <= 0) {
          $this.counter = 0;
          $this.lootArea = false;
          $this.enterTab = false;
          $this.result = false;
          myStopFunction();
        }
        else {
          $this.counter--        
        }
      }
      function myStopFunction() {
        clearInterval(myVar);        
        $(".grounds>li").length<=0 ? $this.resultItem = false : $this.resultItem = true

      }
    }
  },
  
  //ilk olustugunda cantadaki agirlik
  mounted () {
    this.changeSize();
  }

}).$mount("#app");


