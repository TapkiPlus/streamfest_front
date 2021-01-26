<template>
  <header id="top" class="header" >
    <div class="header-wrapper">

      <div class="header-logo">

        <nuxt-link to="/">

          <img src="/logo.png" alt="">
        </nuxt-link>
      </div>
      <div class="header-nav">
        <ul>
          <li v-for="item in $auth.loggedIn ? navItemsAuth : navItemsNotAuth" :key="item.id"><nuxt-link :to="item.link">{{item.name}}</nuxt-link></li>
        </ul>
      </div>

      <div v-if="this.$auth.loggedIn" class="header-btn">
        <div class="header-logo-mobile">
          <nuxt-link to="/">
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <circle cx="22.5" cy="22.5" r="22.5" fill="white"/>
              <rect x="12" y="8" width="28" height="28" fill="url(#pattern0)"/>
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0" transform="scale(0.0277778)"/>
                </pattern>
                <image id="image0" width="36" height="36" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEgAACxIB0t1+/AAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4yMfEgaZUAAAUgSURBVFhHtZjbbhtFHMb7CH0EHqVK7LUTfNi1uWiBUC7aqtyFJ0i4ACFRqQEeIBEgoV7Q0F4iga8q9a5C3CHFm7OT2M42tuuopxm+b047G5w4x7/06f/N2J7/TzO7s7O+JqVUYryaqoeH0/XFw2L99mHx5geq84rD1ncc1vSLH90AkLQaTtebw6narPndlYUPQzkzmKovEGRQrEl4qEYwAS1f5Wz5MJQzAPlLgRRrwua+gXtVrDe5jGaMSw0fhnKmP1VvQLKPmekBhDCQglLSs/YwCcPrZqxLCR+GcqZfrDd6hUgQpgcowij/fzVbxfDSltCHoZzpEchAHChF4qAQAcBA4jP0qc9aQVXGE6U5M+aFwoehnHlZjBoshgxpKOuZbRuQYh+gq7myXMtX4viCs+XDUM4QCBIawBMAoGwbuTP3tVwjVK6SbBbK594efBjKmaQQNRI1I5FgVkJxSIEwmz5+R75+9lxufXpHrucrSpv58uJ5ri0fhnImwTVkAAAEAAPE5SEEsxX73/79j+z99kRuAGYjBymoStwKojNtDz4M5cw+liwtGuochAL9Goxefy5efnYPP5GyD6BNwAAkFdtB5aGpNzZsfStnUKjRRcEuCqtMAaYLOHqCWH/4+Cl+IuXe/Vm5la/Kbdx1zFs2a8WnWUJb38qZjgLSBZEFwdAnO6avE4TwkRw8+AFf17GNGdk2QL7ntkCx3QoqJ24PGCYjZ1BwmcW1CKJh2mwbuOSLL+X7wQBf19GeuSdbKLrjQbDNzD7VD1DkF8fNFobJyJm9IFxi8YwAYoG6M3flu51dfDWNwU+/yl0UpVh8F7NoQeh1m1l9J9kbccFjmIyc2SuEi5AEmFI7qArr92fuiqMwDNEfyHb0sSqovut+b9pGBHNt1PFnC8Nk5Ax+tKQGzCsQQc+BulimUTA2Dv/4085mNh/t8/pxKcT2IY0hMnKmBSA9tXra6dtYJv+aOS660SfumnMZ4+i27dP96Q0SLowFMiBiF7PUOWaZ/HiDzZF3Hfeq9A496v0+KwX4+4lAu4Xqor1jqCGW4qR4t9I0myjuPm6e2N3TduqV8HmmXYjixFxHGCojZ+wM8Zbdm7mDrvHBR4p+6I5+3vGhbNtW6Mcz8xQXNYG4uWHfEPt4ko+L4YMfNQyK6KOJOw04sd8K7SQJwtBwuMBQGTmzla8sQWrb38FTfFwMv/pWnSxZTB3gzNG3h6OuOdA54Qy1cNzRF0Nl5MxmUFniw1FDVeTAPK9GxeufH9kztzpr8xyetj2P5eHrlak9MjBcRs44oFxZMLfCW+Jta/Rd9uaXR+nrks2eDgq1BHfTqQ5tGC4jZzbz1UV1ptFAgn4rvCX7j5/I99iRbQjsS8Pb9/ULJWBUJgg8b2dsgMtnOahhyIycWQcQzjIChy0FY7XO8031puzMfyO6330v2jVugnrD466LnV2dg3BqjDdy4YnLMyp8GMoZgMyt44y8gRkiBDxy2WQFprOCRJ/JPFND8/E539d8GMoZDspDOwvpw3sq22cgCcE3DrYb8Y3TL8+o8GEoZ1BkTr3aqIJlYV5zVNv1T5bMZ5iVoHIpr9Y+DOXMWq6kgFZRNEam0Barkyqn/ZOlhfMuz6jwYShn4onyrAVBUZHK9OVKL6AzX7TjwoehnEHRKgGakyXZBEQTECpPlpM49+GV/U/kw1DO4OK8Dqj9FQBRhMGMXPiiHRc+DJUaBIuv5Erz/05Mf05A1XnF4cNIKa/9B6HRJTrORfq+AAAAAElFTkSuQmCC"/>
              </defs>
            </svg>
          </nuxt-link>
        </div>
        <div class="header-btn__balance">
          <div class="header-btn__balance--img">
            <img src="/diamond.svg" alt="">
          </div>
          <p>{{this.$auth.user.balance}}</p>
        </div>
        <div class="header-btn__notify">
          <div class="header-btn__notify--img">
            <div v-if="false" class="header-btn__notify--img--num"><p>2</p></div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.7295 21C13.5537 21.3031 13.3014 21.5547 12.9978 21.7295C12.6941 21.9044 12.3499 21.9965 11.9995 21.9965C11.6492 21.9965 11.3049 21.9044 11.0013 21.7295C10.6977 21.5547 10.4453 21.3031 10.2695 21"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>


          </div>
        </div>
        <div @click="$router.push($auth.user.is_streamer ? '/streamer' : '/lk')" class="header-btn__user">
          <img :src="this.$auth.user.avatar" alt="">
          <div  class="header-btn__user--name">
            <p>{{this.$auth.user.fio.length > 5 ? this.$auth.user.fio.slice(0,5) + '...' : this.$auth.user.fio }}</p>
            <p>@{{this.$auth.user.nickname}}</p>
          </div>
          <div class="header-btn__user--arrow">
            <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L0.535898 6.52533e-07L7.4641 4.68497e-08L4 6Z" fill="#B4B4B4"/>
            </svg>
          </div>
          <div   class="header-btn__user--dropdown" :class="{'dropdownActive':hovered}">
            <div @click="logOut" class="header-btn__user--dropdown__inner">
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.92 6.62C15.8724 6.49725 15.801 6.3851 15.71 6.29L12.71 3.29C12.5217 3.1017 12.2663 2.99591 12 2.99591C11.7337 2.99591 11.4783 3.1017 11.29 3.29C11.1017 3.4783 10.9959 3.7337 10.9959 4C10.9959 4.2663 11.1017 4.5217 11.29 4.71L12.59 6H3C2.73478 6 2.48043 5.89464 2.29289 5.70711C2.10536 5.51957 2 5.26522 2 5V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V5C0 5.79565 0.316071 6.55871 0.87868 7.12132C1.44129 7.68393 2.20435 8 3 8H12.59L11.29 9.29C11.1963 9.38296 11.1219 9.49356 11.0711 9.61542C11.0203 9.73728 10.9942 9.86799 10.9942 10C10.9942 10.132 11.0203 10.2627 11.0711 10.3846C11.1219 10.5064 11.1963 10.617 11.29 10.71C11.383 10.8037 11.4936 10.8781 11.6154 10.9289C11.7373 10.9797 11.868 11.0058 12 11.0058C12.132 11.0058 12.2627 10.9797 12.3846 10.9289C12.5064 10.8781 12.617 10.8037 12.71 10.71L15.71 7.71C15.801 7.6149 15.8724 7.50275 15.92 7.38C16.02 7.13654 16.02 6.86346 15.92 6.62Z" fill="#383845"/>
              </svg>
              <p>登出帐户</p>

            </div>

          </div>
        </div>
        <div @click="mobileNavActive=false,userMenuActive  = !userMenuActive" class="header-btn__user-menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="6" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="18" r="2" />
          </svg>

        </div>
        <div class="header-user-menu" :class="{'userMenuActive':userMenuActive}">
          <UserMenu :is_streamer_menu="this.$auth.user.is_streamer"
                    :show_top="false"
                    :show_home_link="true"
                    :menu_class="'user-profile-menu header-user-menu'"/>
        </div>
      </div>
      <div v-else class="header-btn">
        <div class="header-logo-mobile">
           <nuxt-link to="/">
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <circle cx="22.5" cy="22.5" r="22.5" fill="white"/>
              <rect x="12" y="8" width="28" height="28" fill="url(#pattern0)"/>
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0" transform="scale(0.0277778)"/>
                </pattern>
                <image id="image0" width="36" height="36" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEgAACxIB0t1+/AAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4yMfEgaZUAAAUgSURBVFhHtZjbbhtFHMb7CH0EHqVK7LUTfNi1uWiBUC7aqtyFJ0i4ACFRqQEeIBEgoV7Q0F4iga8q9a5C3CHFm7OT2M42tuuopxm+b047G5w4x7/06f/N2J7/TzO7s7O+JqVUYryaqoeH0/XFw2L99mHx5geq84rD1ncc1vSLH90AkLQaTtebw6narPndlYUPQzkzmKovEGRQrEl4qEYwAS1f5Wz5MJQzAPlLgRRrwua+gXtVrDe5jGaMSw0fhnKmP1VvQLKPmekBhDCQglLSs/YwCcPrZqxLCR+GcqZfrDd6hUgQpgcowij/fzVbxfDSltCHoZzpEchAHChF4qAQAcBA4jP0qc9aQVXGE6U5M+aFwoehnHlZjBoshgxpKOuZbRuQYh+gq7myXMtX4viCs+XDUM4QCBIawBMAoGwbuTP3tVwjVK6SbBbK594efBjKmaQQNRI1I5FgVkJxSIEwmz5+R75+9lxufXpHrucrSpv58uJ5ri0fhnImwTVkAAAEAAPE5SEEsxX73/79j+z99kRuAGYjBymoStwKojNtDz4M5cw+liwtGuochAL9Goxefy5efnYPP5GyD6BNwAAkFdtB5aGpNzZsfStnUKjRRcEuCqtMAaYLOHqCWH/4+Cl+IuXe/Vm5la/Kbdx1zFs2a8WnWUJb38qZjgLSBZEFwdAnO6avE4TwkRw8+AFf17GNGdk2QL7ntkCx3QoqJ24PGCYjZ1BwmcW1CKJh2mwbuOSLL+X7wQBf19GeuSdbKLrjQbDNzD7VD1DkF8fNFobJyJm9IFxi8YwAYoG6M3flu51dfDWNwU+/yl0UpVh8F7NoQeh1m1l9J9kbccFjmIyc2SuEi5AEmFI7qArr92fuiqMwDNEfyHb0sSqovut+b9pGBHNt1PFnC8Nk5Ax+tKQGzCsQQc+BulimUTA2Dv/4085mNh/t8/pxKcT2IY0hMnKmBSA9tXra6dtYJv+aOS660SfumnMZ4+i27dP96Q0SLowFMiBiF7PUOWaZ/HiDzZF3Hfeq9A496v0+KwX4+4lAu4Xqor1jqCGW4qR4t9I0myjuPm6e2N3TduqV8HmmXYjixFxHGCojZ+wM8Zbdm7mDrvHBR4p+6I5+3vGhbNtW6Mcz8xQXNYG4uWHfEPt4ko+L4YMfNQyK6KOJOw04sd8K7SQJwtBwuMBQGTmzla8sQWrb38FTfFwMv/pWnSxZTB3gzNG3h6OuOdA54Qy1cNzRF0Nl5MxmUFniw1FDVeTAPK9GxeufH9kztzpr8xyetj2P5eHrlak9MjBcRs44oFxZMLfCW+Jta/Rd9uaXR+nrks2eDgq1BHfTqQ5tGC4jZzbz1UV1ptFAgn4rvCX7j5/I99iRbQjsS8Pb9/ULJWBUJgg8b2dsgMtnOahhyIycWQcQzjIChy0FY7XO8031puzMfyO6330v2jVugnrD466LnV2dg3BqjDdy4YnLMyp8GMoZgMyt44y8gRkiBDxy2WQFprOCRJ/JPFND8/E539d8GMoZDspDOwvpw3sq22cgCcE3DrYb8Y3TL8+o8GEoZ1BkTr3aqIJlYV5zVNv1T5bMZ5iVoHIpr9Y+DOXMWq6kgFZRNEam0Barkyqn/ZOlhfMuz6jwYShn4onyrAVBUZHK9OVKL6AzX7TjwoehnEHRKgGakyXZBEQTECpPlpM49+GV/U/kw1DO4OK8Dqj9FQBRhMGMXPiiHRc+DJUaBIuv5Erz/05Mf05A1XnF4cNIKa/9B6HRJTrORfq+AAAAAElFTkSuQmCC"/>
              </defs>
            </svg>
          </nuxt-link>
        </div>

        <div id="openModalBtn" @click="activeTab = 'loginTab',authModal=true" class="header-btn__login">

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7105 12.7101C16.6909 11.9388 17.4065 10.881 17.7577 9.68407C18.109 8.48709 18.0784 7.21039 17.6703 6.03159C17.2621 4.85279 16.4967 3.83052 15.4806 3.10698C14.4644 2.38344 13.2479 1.99463 12.0005 1.99463C10.753 1.99463 9.5366 2.38344 8.52041 3.10698C7.50423 3.83052 6.73883 4.85279 6.3307 6.03159C5.92257 7.21039 5.892 8.48709 6.24325 9.68407C6.59449 10.881 7.31009 11.9388 8.29048 12.7101C6.61056 13.3832 5.14477 14.4995 4.04938 15.94C2.95398 17.3806 2.27005 19.0914 2.07048 20.8901C2.05604 21.0214 2.0676 21.1543 2.10451 21.2812C2.14142 21.408 2.20295 21.5264 2.2856 21.6294C2.4525 21.8376 2.69527 21.971 2.96049 22.0001C3.2257 22.0293 3.49164 21.9519 3.69981 21.785C3.90798 21.6181 4.04131 21.3753 4.07049 21.1101C4.29007 19.1553 5.22217 17.3499 6.6887 16.0389C8.15524 14.7279 10.0534 14.0032 12.0205 14.0032C13.9876 14.0032 15.8857 14.7279 17.3523 16.0389C18.8188 17.3499 19.7509 19.1553 19.9705 21.1101C19.9977 21.3558 20.1149 21.5828 20.2996 21.7471C20.4843 21.9115 20.7233 22.0016 20.9705 22.0001H21.0805C21.3426 21.97 21.5822 21.8374 21.747 21.6314C21.9119 21.4253 21.9886 21.1625 21.9605 20.9001C21.76 19.0963 21.0724 17.3811 19.9713 15.9383C18.8703 14.4955 17.3974 13.3796 15.7105 12.7101ZM12.0005 12.0001C11.2094 12.0001 10.436 11.7655 9.7782 11.326C9.12041 10.8865 8.60772 10.2618 8.30497 9.53086C8.00222 8.79995 7.923 7.99569 8.07734 7.21976C8.23168 6.44384 8.61265 5.73111 9.17206 5.1717C9.73147 4.61229 10.4442 4.23132 11.2201 4.07698C11.996 3.92264 12.8003 4.00186 13.5312 4.30461C14.2621 4.60736 14.8868 5.12005 15.3264 5.77784C15.7659 6.43564 16.0005 7.209 16.0005 8.00012C16.0005 9.06099 15.5791 10.0784 14.8289 10.8286C14.0788 11.5787 13.0614 12.0001 12.0005 12.0001Z" fill="white"/>
          </svg>
          <p>授权</p>
        </div>
      </div>

      <div @click="userMenuActive=false,mobileNavActive  = !mobileNavActive" class="header-nav-mobile__toggle"
           :class="{'mobileNavToggleActive':mobileNavActive}">
        <transition name="home">
          <svg v-if="!mobileNavActive" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 18H21" stroke="#CECFDF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 12H21" stroke="#CECFDF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 6H21" stroke="#CECFDF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#CECFDF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 9L9 15" stroke="#CECFDF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 9L15 15" stroke="#CECFDF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </transition>

      </div>
      <div class="header-nav-mobile" :class="{'mobileNavActive':mobileNavActive}">
        <ul>
          <li v-for="item in $auth.loggedIn ? navItemsAuth : navItemsNotAuth" :key="item.id"><nuxt-link :to="item.link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {{item.name}}
          </nuxt-link></li>
        </ul>
      </div>
    </div>

    <el-dialog class="authModal" :visible.sync="authModal"  >
      <el-tabs  v-model="activeTab" :stretch="true">
        <el-tab-pane label="登录帐号" name="loginTab">
          <el-input class="mb-10 mt-40" v-model="userData.wechatid" placeholder="您的微信号码"></el-input>
          <el-input class="mb-20" v-model="userData.password" show-password placeholder="输入密码"></el-input>
          <div class="authModal-group mb-20">
            <el-checkbox class="text-f-14" v-model="userData.agree">让我签名</el-checkbox>
            <p class="text-f-14  c-pointer" > <nuxt-link class="text-l-green" to="/contacts">忘记密码了?</nuxt-link> </p>
          </div>
          <p class="btn btn-l-blue text-f-14 mb-15" @click="userLogin">登录</p>
          <p class="text-center text-f-14" @click="activeTab='regTab'"><span class="text-l-green c-pointer">还没有帐号？ 现在注册 </span></p>
        </el-tab-pane>
        <el-tab-pane label="报到" name="regTab">
          <p class="text-center mb-15">付款后，您的注册确认信将发送到您的邮件中。付款时，请在付款说明中注明您的昵称和姓名</p>
          <div v-if="register_step===1">
            <el-input class="mb-10" v-model="registerData.fio" placeholder="您的名字和姓氏"></el-input>
            <el-input class="mb-10 " v-model="registerData.wechatid" placeholder="您的微信号码"></el-input>
            <el-input class="mb-10" v-model="registerData.email" placeholder="你的邮件"></el-input>
            <el-input class="mb-10" v-model="registerData.password1" placeholder="输入密码" show-password></el-input>
            <el-input class="mb-10" v-model="registerData.password2" placeholder="再次输入密码" show-password></el-input>
            <el-checkbox class="text-f-14 mb-20" v-model="registerData.agree">让我签名</el-checkbox>
            <p class="btn btn-l-blue text-f-14 mb-15" @click="register_step=2">进一步</p>
             <p class="text-center text-f-14" @click="activeTab='loginTab'"><span class="text-l-green c-pointer">已经有一个帐户?</span></p>

          </div>
          <div v-if="register_step===2">
            <el-input class="mb-20 mt-40" v-model="registerData.nickname" placeholder="输入你的昵称"></el-input>
            <div class="authModal-group">
              <div class="">
                <p class="text-f-14 text-grey mb-20">选择关税</p>
                <div class="authModal-group__radio">
                  <el-radio class="mb-40 text-f-14" v-model="registerData.subscribe_type" label="1">1个月费用 <span class="text-l-green">175¥</span></el-radio>
                  <el-radio class="mb-40 text-f-14" v-model="registerData.subscribe_type" label="2">6个月费用 <span class="text-l-green">350¥</span></el-radio>
                  <el-radio v-model="registerData.subscribe_type" label="3">12个月费用 <span class="text-l-green">700¥</span></el-radio>
                </div>
              </div>
              <div class="">
                <p class="mb-15">付款后，您的注册确认信将发送到您的邮件</p>
                <img src="/qr.png" alt="">
              </div>

            </div>
            <div class="authModal-buttons">
              <p class="btn btn-l-blue text-f-14 mb-15" @click="register_step=1">背部</p>
              <p class="btn btn-l-blue text-f-14 mb-15" @click="userRegister">在网站上注册</p>
            </div>

          </div>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>

  </header>
</template>

<script>
import UserMenu from '@/components/UserMenu';

export default {
  components: {
    UserMenu

  },
  transition: 'home',
  data() {
    return {
      hovered:false,
      authModal:false,
      activeTab:'loginTab',
      logInDialogVisible:false,
      registerDialogVisible:false,
      mobileNavActive:false,
      userMenuActive:false,
      register_step:1,
      navItemsAuth:[
        {id:1,name:'回到主页面',link:'/'},
        {id:2,name:'个人专区',link:'/lk'},
        {id:3,name:'我们的广播',link:'/stream'},
        {id:4,name:'我们的女孩',link:'/girls'},
        {id:5,name:'信息和规则',link:'/info/rules'},
        {id:6,name:'联系人和反馈',link:'/contacts'},
        {id:7,name:'ВХОД ДЛЯ ДЕВУШЕК',link:'/login'},
      ],
      navItemsNotAuth:[
        {id:1,name:'回到主页面',link:'/'},
        {id:3,name:'我们的广播',link:'/stream'},
        {id:4,name:'我们的女孩',link:'/girls'},
        {id:5,name:'信息和规则',link:'/info/rules'},
        {id:6,name:'联系人和反馈',link:'/contacts'},
        {id:7,name:'ВХОД ДЛЯ ДЕВУШЕК',link:'/login'},
      ],
      userData:{
        email:null,
        password:null,
        agree:null,
      },
      registerData:{
        nickname:null,
        email:null,
        wechatid:null,
        password1:null,
        password2:null,
        agree:null,
        subscribe_type:'1',
      },
    };
  },
  watch: {
    '$route.path': function(val) {
      this.mobileNavActive = false
      this.userMenuActive = false
    }
  },
  mounted() {
    this.$auth.user ? this.ws_connect() : null
  },
  methods: {
    ws_connect(){
      this.socket = new WebSocket(process.env.ws_url+'/ws/user/online/')
      this.socket.onopen = () => {
        console.log('ws connected')
        this.socket.send(JSON.stringify({'user_id':this.$auth.user.id,'message':'user online'}))
      }
      this.socket.onmessage = (res) =>{
        let data = JSON.parse(res.data)
        console.log('socket.onmessage', data)
      }
    },
    notify(title,message,type){
      this.$notify({
        title: title,
        message: message,
        type: type
      });
    },
    async userLogin() {
      console.log('dsfd')
      try {
        let response = await this.$auth.loginWith('local', { data: this.userData })
        console.log(response)
        this.authModal=false
        this.ws_connect()
      } catch (error) {
        this.notify('错误','检查输入的数据！','error')
      }
    },
    logOut(){
      this.socket.send(JSON.stringify({'logout_id':this.$auth.user.id}))
      this.$auth.logout()
    },
    async userRegister(){
      try{
        let response =  this.$axios.post('/auth/users/', {
          email:this.registerData.email,
          password:this.registerData.password2,
          fio:this.registerData.fio,
          wechatid:this.registerData.wechatid,
          nickname:this.registerData.nickname,
        })
        console.log(await response)
        this.notify('您已经成功注册了！','我们将在12小时内激活您的帐户','success')
        this.$router.push('/')
      }catch (e) {
        this.notify('错误','检查输入的数据！','error')
      }


    }

  }
}
</script>


<style>
.home-enter-active, .home-leave-active { transition: opacity .5s; }
.home-enter, .home-leave-active { opacity: 0; }
</style>
