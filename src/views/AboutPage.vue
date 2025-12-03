<template>
    <!-- About Section -->
    <section id="about" class="about section light-background">

      

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row align-items-center">
          <div class="col-lg-6 position-relative" data-aos="fade-right" data-aos-delay="200">
            <div class="about-image">
              <img src="/assets/img/images new/PhotoAbout.png" alt="Profile Image" class="img-fluid rounded-4">
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="300">
            <div class="about-content">
              

              <h2>{{ $t('Information') }}</h2>

              <p class="lead mb-4">{{ $t('InformationDetails') }}</p>

              

              <div class="personal-info">
                <div class="row g-4">
                  <div class="col-6">
                    <div class="info-item">
                      <span class="label">{{$t('namerim')}}</span>
                      <span class="value">{{ $t('chhilrim') }}</span>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="info-item">
                      <span class="label">{{ $t('phone') }}</span>
                      <span class="value">{{ $t('phonerim') }}</span>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="info-item">
                      <span class="label">{{ $t('age') }}</span>
                      <span class="value">{{ $t('agerim') }}</span>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="info-item">
                      <span class="label">{{ $t('email') }}</span>
                      <span class="value">{{ $t('emailrim') }}</span>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="info-item">
                      <span class="label">{{ $t('occupation') }}</span>
                      <span class="value">{{$t('dataentry')}}</span>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="info-item">
                      <span class="label">{{$t('nationality')}}</span>
                      <span class="value">{{ $t('khmerrim') }}</span>
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