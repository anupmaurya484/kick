<template>
  <div id="home">
    <LazyHydrate when-visible>
      <section data-v-7f245110="" class="sf-banner section-1"
        style="--_banner-background-image:url(/homepage/banner.png);">
        <div link="" class="sf-banner__wrapper">
          <h1 class="sf-banner__titles">
            What makes shen unique
          </h1>
          <p class="sf-banner__description">
            We are Cleaning Company with 16 years of successful experience in cleaning and maintaining different
            buildings of all difficulty levels.
          </p>
        </div>
      </section>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <div class="sf-heading section-2">
        <h2 class="sf-heading__title h2">Our achievements in figures</h2>
        <div class="sf-heading__description">We are global and professional company </div>
        <div class="boxs">
          <div class="box-item">
            <div class="subitem">
              <h2 class="subitem-title font-playfair">537</h2>
              <p class="subtitle-text font-roboto">facilities serviced daily</p>
            </div>
          </div>
          <div class="box-item">
            <div class="subitem">
              <h2 class="subitem-title font-playfair">537</h2>
              <p class="subtitle-text font-roboto">facilities serviced daily</p>
            </div>
          </div>
          <div class="box-item">
            <div class="subitem">
              <h2 class="subitem-title font-playfair">537</h2>
              <p class="subtitle-text font-roboto">facilities serviced daily</p>
            </div>
          </div>
          <div class="box-item positon-iconcall">
            <div class="subitem">
              <h2 class="subitem-title font-playfair">537</h2>
              <p class="subtitle-text font-roboto">facilities serviced daily</p>
            </div>
            <img class="call-icon" src="/homepage/phoneicon.png" alt="Card image cap"  />
          </div>
        </div>
      </div>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <div class="sf-heading section-3 bg-color">
        <div>
          <div>
            <h1 class="font-playfair advanteage-color title-advantages">
              Advantages</h1>
          </div>
          <div class="cardsitem">
            <div class="cards">
              <div class="pading-fourcardbody">
                <img class="" src="/homepage/cardimgone.png" alt="Card image cap" width="48px" height="60px">
                <div class="">
                  <h5 class="card-liability font-playfair">Liability insurange</h5>
                  <p class="card-paragraph font-roboto">We understand how important trust in our company is.
                    That is why
                    we provide guarantees of the quality of our work and vouch for our employees.</p>
                </div>
              </div>
            </div>

            <div class="cards">
              <div class="pading-fourcardbody">
                <img class="" src="/homepage/cardimgtwo.png" alt="Card image cap" width="48px" height="60px">
                <div class="">
                  <h5 class="card-liability font-playfair">Liability insurange</h5>
                  <p class="card-paragraph font-roboto">We use modern technologies and employ trained
                    personnel. We
                    achieve our maximum because we work with inspiration.</p>
                </div>
              </div>
            </div>

            <div class="cards">
              <div class="pading-fourcardbody">
                <img class="" src="/homepage/cardimgthree.png" alt="Card image cap" width="48px" height="60px">
                <div class="">
                  <h5 class="card-liability font-playfair">Liability insurange</h5>
                  <p class="card-paragraph font-roboto">Our company cares about the environment and your
                    health. That is
                    why we choose only the best cleaning products that do not spoil the environment and do
                    not affect your health.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <div class="sf-heading section-4">
        <h2 class="sf-heading__title h2">What makes shen unique</h2>
        <div class="sf-heading__description font-roboto">We are Cleaning Company with 16 years of successful experience
          in cleaning and maintaining different buildings of all difficulty levels. The main goal of our team is
          improving the facility management industry and implementing new professional solutions. </div>
        <div class="services">
          <div class="service-item ">
            <img src="/homepage/service-imgeone.png" />
            <div class="content-body">
              <span class="title font-playfair">01. Safe Cleaning Only</span>
              <span class="description font-roboto">
                Our company uses only modern equipment and non-toxic safe cleaning products, which correspond
                international quality standards and Green programs. We take care of your health and saving environment.
              </span>
            </div>
          </div>

          <div class="service-item">
            <div class="content-body responsive-contentbody">
              <span class="title font-playfair">02. Qualified Cleaning Staff</span>
              <span class="description font-roboto">
                Every staff member of our company entered professional course and successfully completed certification
                tasks. Regular trainings and skills development let SHEN professionals offer to each client only
                high-quality individual solutions based on innovative technological approach.
              </span>
            </div>
            <img src="/homepage/service-imgeone-2.png" class="reponsive-image"/>
          </div>

          <div class="service-item ">
            <img src="/homepage/service-imgeone-3.jpg" />
            <div class="content-body">
              <span class="title font-playfair">03. Innovative Control System</span>
              <span class="description font-roboto">
                We’re convinced technology can improve service quality, increase responsibility and effectiveness,
                facilitate feedbacks and keep our prices acceptable for you. Our innovative control system makes
                cleaning process clear and high-quality.
              </span>
            </div>
          </div>

          <div class="service-item">
            <div class="content-body responsive-contentbody">
              <span class="title font-playfair">04. The Best Offer</span>
              <span class="description font-roboto">
                SHEN company pays special attention for reasonable pricing, which based on effective solutions and
                professional cleaning products. Control system provides complete information about facility, provided
                services, necessary time for completing tasks and check-list.
              </span>
            </div>
            <img src="/homepage/service-imgeone-4.png" class="reponsive-image"/>
          </div>
        </div>
      </div>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <SfCarousel class="reviews"
        :settings="{ type: 'carousel', rewind: true, perView: 1, slidePerPage: true, gap: 0, breakpoints: { 1023: { perView: 2, peek: { before: 0, after: 50, }, }, }, }">

        <SfCarouselItem>
          <div class=" glide__bullets">
            <div class="sf-heading section-5">
              <h2 class="sf-heading__title h2">Reviews</h2>
              <SfImage src="/homepage/reviewmanimage.png" alt="Vue Storefront Next" width="140px" height="140px" />
              <h6>Liam Olivia</h6>
              <span>CEO</span>
              <br />
              <div class="font-roboto decription">
                As the manager of a large company in Miami, I was looking at several different companies that I could
                sign a cleaning contract with. As a family run company that takes pride in its work and has a strong
                work ethic, I'm glad we made the decision to use Shen. Whether we contact them by e-mail or by phone,
                the response time shortens quickly and always with excellent behavior. My restaurants are clean and
                willing to serve clients 24/7!
              </div>
            </div>
          </div>
        </SfCarouselItem>
        <SfCarouselItem>
          <div class=" glide__bullets">
            <div class="sf-heading section-5">
              <h2 class="sf-heading__title h2">Reviews</h2>
              <SfImage src="/homepage/reviewmanimage.png" alt="Vue Storefront Next" width="140px" height="140px" />
              <h6>Liam Olivia</h6>
              <span>CEO</span>
              <br />
              <div class="font-roboto decription">
                As the manager of a large company in Miami, I was looking at several different companies that I could
                sign a cleaning contract with. As a family run company that takes pride in its work and has a strong
                work ethic, I'm glad we made the decision to use Shen. Whether we contact them by e-mail or by phone,
                the response time shortens quickly and always with excellent behavior. My restaurants are clean and
                willing to serve clients 24/7!
              </div>
            </div>
          </div>
        </SfCarouselItem>
        <SfCarouselItem>
          <div class=" glide__bullets">
            <div class="sf-heading section-5">
              <h2 class="sf-heading__title h2">Reviews</h2>
              <SfImage src="/homepage/reviewmanimage.png" alt="Vue Storefront Next" width="140px" height="140px" />
              <h6>Liam Olivia</h6>
              <span>CEO</span>
              <br />
              <div class="font-roboto decription">
                As the manager of a large company in Miami, I was looking at several different companies that I could
                sign a cleaning contract with. As a family run company that takes pride in its work and has a strong
                work ethic, I'm glad we made the decision to use Shen. Whether we contact them by e-mail or by phone,
                the response time shortens quickly and always with excellent behavior. My restaurants are clean and
                willing to serve clients 24/7!
              </div>
            </div>
          </div>
        </SfCarouselItem>


      </SfCarousel>

    </LazyHydrate>
    
    <LazyHydrate when-visible>
      <div class="section-sixbg">
        <div>
          <h2 class="sf-heading__title h2">Our partners</h2>
        </div>
        <div class="brand-group">
          <div class="brand-item">
            <div>
              <img class="brand-image" src="/homepage/okinawa.png" alt="Card image cap" width="" height="">
            </div>
          </div>
          <div class="brand-item">
            <div>
              <img class="brand-image" src="/homepage/novus.png" alt="Card image cap" width="" height="">
            </div>
          </div>
          <div class="brand-item">
            <div>
              <img class="brand-image" src="/homepage/mondeleze.png" alt="Card image cap" width="" height="">
            </div>
          </div>
          <div class="brand-item">
            <div>
              <img class="brand-image" src="/homepage/kfc.png" alt="Card image cap" width="" height="">
            </div>
          </div>
        </div>

        <div class="brand-group">
          <div class="brand-item">
            <div>
              <img class="brand-image" src="/homepage/novus.png" alt="Card image cap" width="" height="">
            </div>
          </div>
          <div class="brand-item">
            <div>
              <img class="brand-image" src="/homepage/okinawa.png" alt="Card image cap" width="" height="">
            </div>
          </div>

          <div class="brand-item">
            <div>
              <img class="brand-image" src="/homepage/kfc.png" alt="Card image cap" width="" height="">
            </div>
          </div>
          <div class="brand-item">
            <div>
              <img class="brand-image" src="/homepage/mondeleze.png" alt="Card image cap" width="" height="">
            </div>
          </div>
        </div>
      </div>
    </LazyHydrate>

  </div>
</template>
<script>

import {
  SfHero,
  SfBanner,
  SfCallToAction,
  SfSection,
  SfCarousel,
  SfProductCard,
  SfImage,
  SfBannerGrid,
  SfHeading,
  SfArrow,
  SfButton
} from '@storefront-ui/vue';
import { ref, useContext } from '@nuxtjs/composition-api';
import InstagramFeed from '~/components/InstagramFeed.vue';
import NewsletterModal from '~/components/NewsletterModal.vue';
import LazyHydrate from 'vue-lazy-hydration';
import { useUiState } from '../composables';
import cacheControl from './../helpers/cacheControl';

export default {
  name: 'Home',
  middleware: cacheControl({
    'max-age': 60,
    'stale-when-revalidate': 5
  }),
  components: {
    InstagramFeed,
    SfHero,
    SfBanner,
    SfCallToAction,
    SfSection,
    SfCarousel,
    SfProductCard,
    SfImage,
    SfBannerGrid,
    SfHeading,
    SfArrow,
    SfButton,
    NewsletterModal,
    LazyHydrate
  },
  setup() {
    const { $config } = useContext();
    const { toggleNewsletterModal } = useUiState();
    const products = ref([
      {
        title: 'Cream Beach Bag',
        image: '/homepage/productA.webp',
        price: { regular: '50.00 $' },
        rating: { max: 5, score: 4 },
        isInWishlist: true
      },
      {
        title: 'Cream Beach Bag',
        image: '/homepage/productB.webp',
        price: { regular: '50.00 $' },
        rating: { max: 5, score: 4 },
        isInWishlist: false
      },
      {
        title: 'Cream Beach Bag',
        image: '/homepage/productC.webp',
        price: { regular: '50.00 $' },
        rating: { max: 5, score: 4 },
        isInWishlist: false
      },
      {
        title: 'Cream Beach Bag',
        image: '/homepage/productA.webp',
        price: { regular: '50.00 $' },
        rating: { max: 5, score: 4 },
        isInWishlist: false
      },
      {
        title: 'Cream Beach Bag',
        image: '/homepage/productB.webp',
        price: { regular: '50.00 $' },
        rating: { max: 5, score: 4 },
        isInWishlist: false
      },
      {
        title: 'Cream Beach Bag',
        image: '/homepage/productC.webp',
        price: { regular: '50.00 $' },
        rating: { max: 5, score: 4 },
        isInWishlist: false
      },
      {
        title: 'Cream Beach Bag',
        image: '/homepage/productA.webp',
        price: { regular: '50.00 $' },
        rating: { max: 5, score: 4 },
        isInWishlist: false
      },
      {
        title: 'Cream Beach Bag',
        image: '/homepage/productB.webp',
        price: { regular: '50.00 $' },
        rating: { max: 5, score: 4 },
        isInWishlist: false
      }
    ]);
    const heroes = [
      {
        title: 'Colorful summer dresses are already in store',
        subtitle: 'SUMMER COLLECTION 2019',
        background: '#eceff1',
        image: '/homepage/bannerH.webp'
      },
      {
        title: 'Colorful summer dresses are already in store',
        subtitle: 'SUMMER COLLECTION 2019',
        background: '#efebe9',
        image: '/homepage/bannerA.webp',
        className:
          'sf-hero-item--position-bg-top-left sf-hero-item--align-right'
      },
      {
        title: 'Colorful summer dresses are already in store',
        subtitle: 'SUMMER COLLECTION 2019',
        background: '#fce4ec',
        image: '/homepage/bannerB.webp'
      }
    ];
    const banners = [
      {
        slot: 'banner-A',
        subtitle: 'Dresses',
        title: 'Cocktail & Party',
        description:
          'Find stunning women\'s cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.',
        buttonText: 'Shop now',
        image: {
          mobile: $config.theme.home.bannerA.image.mobile,
          desktop: $config.theme.home.bannerA.image.desktop
        },
        class: 'sf-banner--slim desktop-only',
        link: $config.theme.home.bannerA.link
      },
      {
        slot: 'banner-B',
        subtitle: 'Dresses',
        title: 'Linen Dresses',
        description:
          'Find stunning women\'s cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.',
        buttonText: 'Shop now',
        image: $config.theme.home.bannerB.image,
        class: 'sf-banner--slim banner-central desktop-only',
        link: $config.theme.home.bannerB.link
      },
      {
        slot: 'banner-C',
        subtitle: 'T-Shirts',
        title: 'The Office Life',
        image: $config.theme.home.bannerC.image,
        class: 'sf-banner--slim banner__tshirt',
        link: $config.theme.home.bannerC.link
      },
      {
        slot: 'banner-D',
        subtitle: 'Summer Sandals',
        title: 'Eco Sandals',
        image: $config.theme.home.bannerD.image,
        class: 'sf-banner--slim',
        link: $config.theme.home.bannerD.link
      }
    ];

    const onSubscribe = (emailAddress) => {
      console.log(`Email ${emailAddress} was added to newsletter.`);
      toggleNewsletterModal();
    };

    const toggleWishlist = (index) => {
      products.value[index].isInWishlist = !products.value[index].isInWishlist;
    };

    return {
      toggleWishlist,
      toggleNewsletterModal,
      onSubscribe,
      banners,
      heroes,
      products
    };
  }
};
</script>
<style lang="scss" scoped>
#home {
  box-sizing: border-box;
  padding: 0 var(--spacer-sm);

  @include for-desktop {
    max-width: 1240px;
    padding: 0;
    margin: 0 auto;
  }
}
</style>
