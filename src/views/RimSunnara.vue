<template>
     <!-- About Section -->
    <section id="about" class="about section light-background">

      

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row align-items-center">
          <div class="col-lg-6 position-relative" data-aos="fade-right" data-aos-delay="200">
            <div class="about-image">
              <img src="/assets/img/images new/RimSunnara.png" alt="Profile Image" class="img-fluid rounded-4">
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="300">
            <div class="about-content">
              

              <h2>{{ $t('InformationOfSon') }}</h2>

              <p class="lead mb-4">{{ $t('InformationDetailsOfSon') }}</p>

              

              <div class="personal-info">
                <div class="row g-4">
                  <div class="col-6">
                    <div class="info-item">
                      <span class="label">{{ $t('namesunnara') }}</span>
                      <span class="value">{{ $t('namerimsunnara') }}</span>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="info-item">
                      <span class="label">{{ $t('phonesunnara') }}</span>
                      <span class="value">{{$t('phonerimsunnara')}}</span>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="info-item">
                      <span class="label">{{ $t('agesunnara') }}</span>
                      <span class="value">{{ $t('agerimsunnara') }}</span>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="info-item">
                      <span class="label">{{$t('emailsunnara')}}</span>
                      <span class="value">{{$t('emailrimsunnara')}}</span>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="info-item">
                      <span class="label">{{ $t('occupationsunnara') }}</span>
                      <span class="value">{{ $t('occupationrimsunnara') }}</span>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="info-item">
                      <span class="label">{{ $t('nationalitysunnara') }}</span>
                      <span class="value">{{ $t('nationalityrimsunnara') }}</span>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>

      </div>

    </section><!-- /About Section -->
</template>