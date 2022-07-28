<template>
  <div>
    <AppHeader />
    <div id="layout">
      <nuxt :key="route.fullPath" />
      <BottomNavigation />
      <CartSidebar />
      <WishlistSidebar />
      <LoginModal />
      <Notification />
    </div>
    <LazyHydrate when-visible>
      <AppFooter />
    </LazyHydrate>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue';
import BottomNavigation from '~/components/BottomNavigation.vue';
import AppFooter from '~/components/AppFooter.vue';
import TopBar from '~/components/TopBar.vue';
import CartSidebar from '~/components/CartSidebar.vue';
import WishlistSidebar from '~/components/WishlistSidebar.vue';
import LoginModal from '~/components/LoginModal.vue';
import LazyHydrate from 'vue-lazy-hydration';
import Notification from '~/components/Notification';
import { onSSR } from '@vue-storefront/core';
import { useRoute } from '@nuxtjs/composition-api';
import { useCart, useStore, useUser, useWishlist } from '@vue-storefront/commercetools';

export default {
  name: 'DefaultLayout',

  components: {
    LazyHydrate,
    TopBar,
    AppHeader,
    BottomNavigation,
    AppFooter,
    CartSidebar,
    WishlistSidebar,
    LoginModal,
    Notification
  },

  setup() {
    const route = useRoute();
    const { load: loadStores } = useStore();
    const { load: loadUser } = useUser();
    const { load: loadCart } = useCart();
    const { load: loadWishlist } = useWishlist();

    onSSR(async () => {
      await Promise.all([
        loadStores(),
        loadUser(),
        loadCart(),
        loadWishlist()
      ]);
    });

    return {
      route
    };
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&display=swap');
@import "~@storefront-ui/vue/styles";

#layout {
  box-sizing: border-box;

  @include for-desktop {
    max-width: 1680px;
    margin: auto;
  }
}

header {
  max-width: inherit !important;

  .sf-header__navigation {
    width: 478px;
  }

  .app-header_Cleaning a {
    width: 168px;
  }
}

#home {
  max-width: 1680px !important;
}

.no-scroll {
  overflow: hidden;
  height: 100vh;
}

// Reset CSS
html {
  width: auto;

  @include for-mobile {
    overflow-x: hidden;
  }
}

//Header 
header {
  .sf-header__logo-image {
    height: 54px;
    width: 66px;
  }

  .sf-header-navigation-item__link {
    font-family: 'Roboto' !important;
    font-style: normal !important;
    font-weight: 400 !important;
    font-size: 14px !important;
    line-height: 160% !important;
  }
}


.sf-header__actions nav {
  margin: auto 125px;
}

.sf-header__header {
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
}

.sf-header__logo {
  margin-left: 87px;
}

@media only screen and (max-width: 425px) {
  .sf-header__logo {
    margin-left: 5px;
  }
}

.sf-header__actions {
  margin-right: 80px;
}

#home section {
  height: 500px;
}


.font-playfair {
  font-family: 'Playfair Display', serif !important;
  font-style: normal;
}

.font-roboto {
  font-family: 'Roboto', sans-serif !important;
  font-style: normal;
}

#home {

  .section-1 {
    .sf-banner__wrapper {
      margin-left: 50px;
    }

    .sf-banner__titles {
      font-family: 'Playfair Display';
      font-style: normal;
      font-weight: 700;
      font-size: 54px;
      line-height: 72px;
      color: #032724;
    }

    .sf-banner__description {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;
      color: #032724;
      opacity: 0.8;
      flex: none;
      order: 1;
      flex-grow: 0;
    }

    @media only screen and (max-width: 425px) {
      .sf-banner__wrapper {
        margin-left: -35px;
      }

      .sf-banner__titles {
        font-size: 35px;
        line-height: 50px;
      }

    }

  }

  .sf-heading.section-2 {
    min-height: 482px;
    background: #F6F6F6;
    padding: 50px 0;

    .sf-heading__title {
      font-weight: 700;
      font-size: 40px;
      line-height: 53px;
      color: #032724;
    }

    .sf-heading__description {
      font-weight: 400;
      font-size: 20px;
      line-height: 160%;
      text-align: center;
      color: #032724;
      opacity: 0.8;
      margin-bottom: 50px;
    }

    .boxs {
      width: 83%;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
      justify-content: center;
      position: relative;
    }

    @media only screen and (max-width: 425px) {
      .sf-heading__title {
        font-size: 30px;
        line-height: 40px;
      }

      .sf-heading__description {
        margin-bottom: 25px;
      }
    }

    .boxs .positon-iconcall {
      position: relative;

      .call-icon {
        width: 72px !important;
        height: 72px !important;
        position: absolute;
        top: -15px;
        right: -66px;
      }

      @media only screen and (max-width: 400px) {
        .call-icon {
          display: none;
        }
      }
    }

    .boxs .box-item {
      width: 260px;
      height: 213px;
      background: #fff;
      margin: 10px;

      .subitem {
        width: 70%;
        margin: auto;
      }

      .subitem-title {
        font-weight: 700;
        font-size: 64px;
        line-height: 85px;
        text-align: center;
        letter-spacing: -0.03em;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #37D0C3;
        margin: 0;
        padding: 30px 0 15px 0;
      }
    }

    @media only screen and (max-width: 425px) {
      .boxs .box-item {
        height: 200px;

        .subitem-title {
          font-size: 50px;
          line-height: 60px;
          padding: 30px 0 15px 0;
        }
      }
    }
  }

  .sf-heading.section-3 {
    background-color: #37D0C3;

    .title-advantages {
      line-height: 53px;
      font-size: 40px;
      color: #032724;
      text-align: center;
      font-weight: 700;
      padding: 48px;
      margin: 0;
    }

    .advanteage-color {
      color: #fff;
    }

    .cardsitem {
      width: 77%;
      // width: 83%;
      margin: 0 auto;
      padding: 0 0 5.5rem 0;
      display: flex;
    }

    .cards {
      width: 30%;
      margin: 0 auto;
      background-color: #fff;
    }

    @media only screen and (max-width: 768px) {
      .cards {
        width: auto;
        margin: 25px auto;
      }

      .cardsitem {
        display: block;
        padding: 0 0 2rem 0;
      }

      .title-advantages {
        padding: 24px 0 0 0;
      }
    }

    @media only screen and (max-width: 425px) {
      .title-advantages {
        font-size: 30px;
      }
    }

    .pading-fourcardbody {
      padding: 2.5rem 2rem 0.5rem !important;
      text-align: left;
    }

    .card-liability {
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      color: #032724;
      margin: 25px 0 0 0;
    }

    .card-paragraph {
      color: rgba(3, 39, 36, 0.8);
      font-weight: 400;
      font-size: 18px;
      line-height: 160%;
      margin: 12px 0;
    }

  }

  .sf-heading.section-4 {
    min-height: 482px;
    background: #fff;
    padding: 50px 0;
    width: 80%;
    margin: 0 auto;

    .sf-heading__title {
      font-weight: 700;
      font-size: 40px;
      line-height: 53px;
      color: #032724;
    }

    .sf-heading__description {
      font-weight: 400;
      font-size: 20px;
      line-height: 160%;
      text-align: center;
      color: #032724;
      opacity: 0.8;
      margin-bottom: 50px;
      width: 55%;
      // width: 61%;
      margin: 0 auto;
      margin-top: 20px;
      margin-bottom: 80px;
    }

    .services .service-item {
      display: flex;
      background: #F6F6F6;
      margin-bottom: 20px;

      img {
        width: 545px;

      }

      .content-body {
        background: #F6F6F6;
        display: grid;
        text-align: left;
        min-height: 162px;
        padding: 63px 75px 0 63px;
      }

      .title {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        color: #032724;
      }

      .description {
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
        color: #032724;
        opacity: 0.8;
      }

    }

    @media only screen and (max-width: 425px) {
      .sf-heading__title {
        font-size: 30px;
        line-height: 40px;
      }

    }

    @media only screen and (max-width: 768px) {
      .services .service-item {
        flex-direction: column;

        img {
          width: -webkit-fill-available;
        }

        .responsive-contentbody {
          order: 2;
        }

        .reponsive-image {
          order: 1;
        }

        .content-body {
          padding: 30px;
        }

      }
    }

    @media only screen and (max-width: 768px) {
      .sf-heading__description {
        margin-bottom: 40px;
        width: auto;
      }
    }
  }

  .reviews {
    width: 80%;
    margin: 0 auto;

    .sf-heading.section-5 {
      min-height: 482px;
      background: #fff;
      padding: 50px 0;

      h2 {
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 53px;
        text-align: center;
        color: #032724;
      }

      @media only screen and (max-width: 768px) {
        h2 {
          font-size: 30px;
          line-height: 40px;
        }
      }
    }

    @media only screen and (max-width: 768px) {
      .sf-heading.section-5 {
        min-height: auto;
        padding: 10px 0;
      }
    }

    .sf-arrow {
      background: #00E0A4;
      height: 50px;
      width: 50px;
      border-radius: 50%;
      padding: 9px;
      color: #fff;
    }

    img {
      margin-top: 37px;
    }

    h6 {
      font-family: 'Playfair Display';
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 0;
      color: #032724;
      flex: none;
      order: 0;
      flex-grow: 0;
      margin: 30px;
    }

    .glide__slides {
      margin: 0 auto;
      width: 148px;
    }

    .description {
      width: 70%;
      margin: 0 auto;
    }

    @media only screen and (max-width: 768px) {
      .reviews {

        h6 {
          margin: 25px;
        }
      }
    }
  }

  .section-sixbg {
    // background-color: #F5F5F5;
    padding: 0 0 25px 0;

    h2 {
      font-family: 'Playfair Display';
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 53px;
      text-align: center;
      color: #032724;
      margin: 10px 0 45px 0;
    }

    .brand-group {
      width: 74.5%;
      // width: 78.8%;
      margin: 0 auto;
      display: flex;
    }

    .brand-item {
      width: 25%;
      background-color: #fff;
      border: 1px solid #E6E6E6;
    }

    .brand-image {
      margin: 45px auto;
      display: block;
    }

    @media only screen and (max-width: 425px) {
      h2 {
        font-size: 30px;
        line-height: 40px;
      }
    }

    @media only screen and (max-width: 768px) {
      .brand-group {
        width: 74.5%;
        margin: 0 auto;
        display: block !important;
      }

      .brand-item {
        width: auto !important;
        margin: 10px auto;
      }
    }
  }
}

.foter {
  background-color: #032724;
  margin-top: 45px;


  .foter-width {
    width: 94%;
    margin: 0 auto;
    padding: 38px 0;
    display: flex;
    justify-content: space-between;
  }

  .foter-text {
    font-weight: 400;
    font-size: 20px;
    line-height: 160%;
    margin: 15px;
    color: rgba(255, 255, 255, 0.8);

  }

  .foter-textmargin {
    margin: 27px 0;
  }

  .foter-iconmargin {
    margin: 17px 0;
  }

  .icon-margin {
    margin: 0 5px;
  }

  @media only screen and (max-width: 768px) {
    .foter {
      height: auto;
    }

    .image-logo {
      margin: 0 auto;
      display: block;
    }

    .foter-textmargin {
      margin: 33px auto 46px auto;
      width: 101px;
    }

    .foter-iconmargin {
      margin: 0 auto;
      display: table;
      width: auto;
      margin-bottom: 45px;
    }

    .foter-width {
      margin: 10px auto;
      display: block;
    }
  }

  @media only screen and (max-width: 425px) {
    .foter-text {
      margin: 10px;
      display: grid;
    }
  }
}



@media only screen and (max-width: 768px) {
  .achievement-items {
    display: block;
  }

  .itemone {
    width: auto;
  }

  .call-icon {
    // display: none;
  }
}
</style>
