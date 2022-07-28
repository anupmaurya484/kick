<template>
  <div class="foter">
    <div class="foter-width">
      <div>
        <img class="image-logo" src="/homepage/wow.png" alt="Card image cap" width="" height="">
      </div>

      <div class="foter-textmargin">
        <span class="foter-text font-roboto">about</span>
        <span class="foter-text font-roboto">Cleaning services</span>
        <span class="foter-text font-roboto">Contacts</span>
        <span class="foter-text font-roboto">Support</span>
      </div>

      <div class="foter-iconmargin">
        <img class="icon-margin" src="/homepage/Facebook.png" alt="Card image cap" width="" height="">
        <img class="icon-margin" src="/homepage/WhatsApp.png" alt="Card image cap" width="" height="">
        <img class="icon-margin" src="/homepage/Viber.png" alt="Card image cap" width="" height="">
        <img class="icon-margin" src="/homepage/Twitter.png" alt="Card image cap" width="" height="">
        <img class="icon-margin" src="/homepage/Messenger.png" alt="Card image cap" width="" height="">
      </div>
    </div>
  </div>
</template>

<script>
import { SfFooter, SfList, SfImage, SfMenuItem } from '@storefront-ui/vue';

export default {
  components: {
    SfFooter,
    SfList,
    SfImage,
    SfMenuItem
  },
  data() {
    return {
      aboutUs: ['Who we are', 'Quality in the details', 'Customer Reviews'],
      departments: ['Women fashion', 'Men fashion', 'Kidswear', 'Home'],
      help: ['Customer service', 'Size guide', 'Contact us'],
      paymentsDelivery: ['Purchase terms', 'Guarantee'],
      social: ['facebook', 'pinterest', 'google', 'twitter', 'youtube'],
      isMobile: false,
      desktopMin: 1500
    };
  }
};
</script>

<style lang="scss">
.footer {
  margin-bottom: 3.75rem;

  @include for-desktop {
    margin-bottom: 0;
  }

  &__socials {
    display: flex;
    justify-content: space-between;
    margin: 0 auto var(--spacer-lg);
    padding: var(--spacer-base) var(--spacer-xl);

    @include for-desktop {
      justify-content: flex-start;
      padding: var(--spacer-xs) 0;
      margin: 0 auto;
    }
  }

  &__social-image {
    margin: 0 var(--spacer-2xs) 0 0;
  }
}

.sf-footer {
  @include for-desktop {
    border-top: var(--spacer-xs) solid var(--c-primary);
    padding-bottom: 0;
    margin-top: var(--spacer-2xl);
  }

  &__container {
    margin: var(--spacer-sm);

    @include for-desktop {
      max-width: 69rem;
      margin: 0 auto;
    }
  }
}
</style>
