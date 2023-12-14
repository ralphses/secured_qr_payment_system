<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>Marketing Landing Page | Prompt - Tailwind CSS Multipurpose Landing Page Template</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta
        content="A fully responsive Tailwind CSS Multipurpose agency, application, business, clean, creative, cryptocurrency, it solutions, startup, career, blog, modern, creative, multipurpose, portfolio, saas, software, tailwind css, etc."
        name="description" />
    <meta content="coderthemes" name="author" />

    <!-- Theme favicon -->
    <link rel="shortcut icon" href="{{ asset('assets/images/favicon.ico') }}">

    <!--Swiper slider css-->
    <link href="{{ asset('assets/libs/swiper/swiper-bundle.min.css') }}" rel="stylesheet" type="text/css">

    <!-- Animation on Scroll css -->
    <link href="{{ asset('assets/libs/aos/aos.css') }}" rel="stylesheet" type="text/css">

    <!-- Style css -->
    <link href="{{ asset('assets/css/style.min.css') }}" rel="stylesheet" type="text/css">

    <!-- Icons css -->
    <link href="{{ asset('assets/css/icons.min.css') }}" rel="stylesheet" type="text/css">
</head>

<body class="text-gray-700">

    <!-- =========== Navbar Start =========== -->
    <header id="navbar"
        class="light fixed top-0 inset-x-0 flex items-center z-40 w-full lg:bg-transparent bg-white transition-all py-5">
        <div class="container">
            <nav class="flex items-center">
                <!-- Navbar Brand Logo -->
                <a href="{{ route('welcome') }}">
                    <img src="{{ asset('assets/images/logo-dark.png') }}" class="h-8 logo-dark" alt="Logo Dark">
                    <img src="{{ asset('assets/images/logo-light.png') }}" class="h-8 logo-light" alt="Logo Light">
                </a>

                <!-- Nevigation Menu -->
                <div class="hidden lg:block ms-auto">
                    <ul class="navbar-nav flex gap-x-3 items-center justify-center">
                        <!-- Home Page Link -->
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Home</a>
                        </li>

                        <!-- Contact Page Link -->
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact us</a>
                        </li>
                    </ul>
                </div>

                <!-- Download Button -->
                <div class="hidden lg:flex items-center ms-3">
                    <a href="{{ route('login') }}"
                        class="bg-primary text-white px-4 py-2 rounded inline-flex items-center text-sm">Login</a>
                </div>

                <!-- Moblie Menu Toggle Button (Offcanvas Button) -->
                <div class="lg:hidden flex items-center ms-auto px-2.5">
                    <button type="button" data-fc-target="mobileMenu" data-fc-type="offcanvas">
                        <i class="fa-solid fa-bars text-2xl text-gray-500"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>
    <!-- =========== Navbar End =========== -->

    <!-- =========== Mobile Menu Start (Offcanvas) =========== -->
    <div id="mobileMenu"
        class="fc-offcanvas-open:translate-x-0 translate-x-full fixed top-0 end-0 transition-all duration-200 transform h-full w-full max-w-md z-50 bg-white border-s hidden">
        <div class="flex flex-col h-full divide-y-2 divide-gray-200">
            <!-- Mobile Menu Topbar Logo (Header) -->
            <div class="p-6 flex items-center justify-between">
                <a href="index.html">
                    <img src="{{ asset('assets/images/logo-dark.png') }}" class="h-8" alt="Logo">
                </a>

                <button data-fc-dismiss class="flex items-center px-2">
                    <i class="fa-solid fa-xmark text-xl"></i>
                </button>
            </div>

            <!-- Mobile Menu Link List -->
            <div class="p-6 overflow-scroll h-full">
                <ul class="navbar-nav flex flex-col gap-2" data-fc-type="accordion">
                    <!-- Home Page Link -->
                    <li class="nav-item">
                        <a href="index.html" class="nav-link">Home</a>
                    </li>

                    <!-- Landing Page -->
                    <li class="nav-item">
                        <a href="javascript:void(0)" data-fc-type="collapse" class="nav-link">
                            Landing <i
                                class="fa-solid fa-angle-down ms-auto align-middle transition-all fc-collapse-open:rotate-180"></i>
                        </a>

                        <ul class="hidden overflow-hidden transition-[height] duration-300 space-y-2">
                            <li class="nav-item mt-2">
                                <a class="nav-link" href="home-app.html">App</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="home-saas.html">Saas Modern</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="home-saas2.html">Saas Classic</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="home-startup.html">Startup</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="home-software.html">Software</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="home-agency.html">Agency</a>
                            </li>

                            <li class="nav-item">

                                <a class="nav-link" href="home-coworking.html">Coworking</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="home-crypto.html">Crypto</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="home-marketing.html">Marketing</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="home-portfolio.html">Portfolio</a>
                            </li>
                        </ul>
                    </li>

                    <!-- Inner Page -->
                    <li class="nav-item">
                        <a href="javascript:void(0)" data-fc-type="collapse" class="nav-link">
                            Pages <i
                                class="fa-solid fa-angle-down ms-auto align-middle transition-all fc-collapse-open:rotate-180"></i>
                        </a>

                        <ul class="hidden overflow-hidden transition-[height] duration-300 space-y-2">
                            <li class="nav-item mt-2">
                                <a class="nav-link" href="company.html">Company</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="career.html">Career</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="pricing.html">Pricing</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="help.html">Help</a>
                            </li>
                        </ul>
                    </li>

                    <!-- Blog Page -->
                    <li class="nav-item">
                        <a href="javascript:void(0)" data-fc-type="collapse" class="nav-link">
                            Blog Page <i
                                class="fa-solid fa-angle-down ms-auto align-middle transition-all fc-collapse-open:rotate-180"></i>
                        </a>

                        <ul class="hidden overflow-hidden transition-[height] duration-300 space-y-2">
                            <li class="nav-item mt-2">
                                <a class="nav-link" href="blog.html">Blog</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="blog-post.html">Blog Post</a>
                            </li>
                        </ul>
                    </li>

                    <!-- Portfolio Page -->
                    <li class="nav-item">
                        <a href="javascript:void(0)" data-fc-type="collapse" class="nav-link">
                            Portfolio <i
                                class="fa-solid fa-angle-down ms-auto align-middle transition-all fc-collapse-open:rotate-180"></i>
                        </a>

                        <ul class="hidden overflow-hidden transition-[height] duration-300 space-y-2">
                            <li class="nav-item mt-2">
                                <a class="nav-link" href="portfolio-grid.html">Portfolio Grid</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="portfolio-masonry.html">Portfolio Masonry</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="portfolio-item.html">Portfolio Item</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="account-confirm.html">Confirm Account</a>
                            </li>
                        </ul>
                    </li>

                    <!-- Auth Page -->
                    <li class="nav-item">
                        <a href="javascript:void(0)" data-fc-type="collapse" class="nav-link">
                            Account <i
                                class="fa-solid fa-angle-down ms-auto align-middle transition-all fc-collapse-open:rotate-180"></i>
                        </a>

                        <ul class="hidden overflow-hidden transition-[height] duration-300 space-y-2">
                            <li class="nav-item mt-2">
                                <a class="nav-link" href="account-login.html">Login</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="account-signup.html">Sign Up</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="account-forget-password.html">Forget Password</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="account-confirm.html">Confirm Account</a>
                            </li>
                        </ul>
                    </li>

                    <!-- Contact Page Link -->
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact us</a>
                    </li>
                </ul>
            </div>

            <!-- Mobile Menu Download Button (Footer) -->
            <div class="p-6 flex items-center justify-center">
                <a href="https://1.envato.market/prompt-tailwind" target="_blank"
                    class="bg-primary w-full text-white p-3 rounded flex items-center justify-center text-sm">Download</a>
            </div>
        </div>
    </div>
    <!-- =========== Mobile Menu End =========== -->

    <!-- =========== Hero Section Start =========== -->
    <section class="relative" style="background: linear-gradient(rgba(0,85,255,.07) 0,rgba(0,85,255,.05) 100%)">

        <section class="relative pt-36 pb-24">
            <div class="container">
                <div class="grid lg:grid-cols-7 grid-cols-1 gap-16 items-center">

                    <div class="lg:col-span-4" data-aos="fade-right">
                        <div class="relative 2xl:-ml-64 lg:-ml-28 2xl:min-w-[130%] lg:w-[113%] w-full">
                            <img src="{{ asset('assets/images/hero/marketing.png') }}" alt="marketing-img">
                        </div>
                    </div>

                    <div class="lg:col-span-3" data-aos="fade-left">
                        <div class="text-center sm:text-start">
                            <h1 class="text-3xl/snug sm:text-4xl/snug xl:text-5xl/snug font-semibold mb-7">Boost your
                                <span
                                    class="relative after:bg-green-500/50 after:-z-10 after:absolute after:h-6 after:w-full after:bottom-0 after:end-0">sales</span>
                                with ease
                            </h1>
                            <p class="text-base/relaxed text-gray-500">Explore a fully automated RIO driven digital
                                marketing platform.</p>
                            <div class="flex sm:flex-row flex-col gap-2 mt-10">
                                <input type="email"
                                    class="sm:w-[75%] text-sm border-gray-300 focus:border-gray-200 focus:ring-0 rounded-md bg-white py-3"
                                    id="Email" aria-describedby="emailHelp" placeholder="Enter Your Email">
                                <button
                                    class="bg-primary text-white rounded-md text-sm font-semibold flex-none shadow-lg shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-8 py-3">Start
                                    Free Trial</button>
                            </div>
                            <p class="text-gray-400 text-xs mt-2">* No Credit Card Required</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <div class="absolute bottom-0 inset-x-0 hidden sm:block">
            <img src="{{ asset('assets/images/shapes/white-wave.svg') }}" alt="white-wave-svg"
                class="w-full -scale-x-100 -scale-y-100">
        </div>

    </section>
    <!-- =========== Hero Section End =========== -->

    <!-- =========== feature Section Start =========== -->
    <section class="py-16 lg:py-32">

        <div class="py-10">
            <div class="container">

                <div class="text-center">
                    <span class="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Features</span>
                    <h1 class="text-3xl font-medium mt-3 mb-4">Marketing Solutions that works for everyone</h1>
                    <p class="text-gray-500">Start working with <span class="text-primary"> Prompt</span> to manage
                        your marketing better.</p>
                </div>

                <div class="grid lg:grid-cols-3 lg:gap-6 gap-10 mt-16">
                    <div data-aos="fade-up" data-aos-duration="300">
                        <div class="h-12 w-12 rounded-md bg-blue-500/10 flex items-center justify-center">
                            <svg class="h-7 w-7 text-blue-500" viewBox="0 0 24 24" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                    <path
                                        d="M4,16 L5,16 C5.55228475,16 6,16.4477153 6,17 C6,17.5522847 5.55228475,18 5,18 L4,18 C3.44771525,18 3,17.5522847 3,17 C3,16.4477153 3.44771525,16 4,16 Z M1,11 L5,11 C5.55228475,11 6,11.4477153 6,12 C6,12.5522847 5.55228475,13 5,13 L1,13 C0.44771525,13 6.76353751e-17,12.5522847 0,12 C-6.76353751e-17,11.4477153 0.44771525,11 1,11 Z M3,6 L5,6 C5.55228475,6 6,6.44771525 6,7 C6,7.55228475 5.55228475,8 5,8 L3,8 C2.44771525,8 2,7.55228475 2,7 C2,6.44771525 2.44771525,6 3,6 Z"
                                        id="Combined-Shape" fill="currentColor" opacity="0.3"></path>
                                    <path
                                        d="M10,6 L22,6 C23.1045695,6 24,6.8954305 24,8 L24,16 C24,17.1045695 23.1045695,18 22,18 L10,18 C8.8954305,18 8,17.1045695 8,16 L8,8 C8,6.8954305 8.8954305,6 10,6 Z M21.0849395,8.0718316 L16,10.7185839 L10.9150605,8.0718316 C10.6132433,7.91473331 10.2368262,8.02389331 10.0743092,8.31564728 C9.91179228,8.60740125 10.0247174,8.9712679 10.3265346,9.12836619 L15.705737,11.9282847 C15.8894428,12.0239051 16.1105572,12.0239051 16.294263,11.9282847 L21.6734654,9.12836619 C21.9752826,8.9712679 22.0882077,8.60740125 21.9256908,8.31564728 C21.7631738,8.02389331 21.3867567,7.91473331 21.0849395,8.0718316 Z"
                                        id="Combined-Shape" fill="currentColor"></path>
                                </g>
                            </svg>
                        </div>
                        <h1 class="mb-3 mt-4 text-lg">Automated Campaigns</h1>
                        <p class="text-gray-500">Praesent ipsum libero, sollicitudin elementum et, condimentum non
                            augue.</p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="600">
                        <div class="h-12 w-12 rounded-md bg-red-500/10 flex items-center justify-center">
                            <svg class="h-7 w-7 text-red-500" viewBox="0 0 24 24" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                    <path
                                        d="M5,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 C4.55228475,3 5,3.44771525 5,4 L5,19 Z"
                                        id="Path-95" fill="currentColor"></path>
                                    <path
                                        d="M8.7295372,14.6839411 C8.35180695,15.0868534 7.71897114,15.1072675 7.31605887,14.7295372 C6.9131466,14.3518069 6.89273254,13.7189711 7.2704628,13.3160589 L11.0204628,9.31605887 C11.3857725,8.92639521 11.9928179,8.89260288 12.3991193,9.23931335 L15.358855,11.7649545 L19.2151172,6.88035571 C19.5573373,6.44687693 20.1861655,6.37289714 20.6196443,6.71511723 C21.0531231,7.05733733 21.1271029,7.68616551 20.7848828,8.11964429 L16.2848828,13.8196443 C15.9333973,14.2648593 15.2823707,14.3288915 14.8508807,13.9606866 L11.8268294,11.3801628 L8.7295372,14.6839411 Z"
                                        id="Path-97" fill="currentColor" opacity="0.3"></path>
                                </g>
                            </svg>
                        </div>
                        <h1 class="mb-3 mt-4 text-lg">Business Analytics</h1>
                        <p class="text-gray-500">Mauris dapibus blandit hendrerit. Proin auctor est at bibendum
                            faucibus sodales.</p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="900">
                        <div class="h-12 w-12 rounded-md bg-teal-500/10 flex items-center justify-center">
                            <svg class="h-7 w-7 text-teal-500" viewBox="0 0 24 24" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                    <path
                                        d="M18.6225,9.75 L18.75,9.75 C19.9926407,9.75 21,10.7573593 21,12 C21,13.2426407 19.9926407,14.25 18.75,14.25 L18.6854912,14.249994 C18.4911876,14.250769 18.3158978,14.366855 18.2393549,14.5454486 C18.1556809,14.7351461 18.1942911,14.948087 18.3278301,15.0846699 L18.372535,15.129375 C18.7950334,15.5514036 19.03243,16.1240792 19.03243,16.72125 C19.03243,17.3184208 18.7950334,17.8910964 18.373125,18.312535 C17.9510964,18.7350334 17.3784208,18.97243 16.78125,18.97243 C16.1840792,18.97243 15.6114036,18.7350334 15.1896699,18.3128301 L15.1505513,18.2736469 C15.008087,18.1342911 14.7951461,18.0956809 14.6054486,18.1793549 C14.426855,18.2558978 14.310769,18.4311876 14.31,18.6225 L14.31,18.75 C14.31,19.9926407 13.3026407,21 12.06,21 C10.8173593,21 9.81,19.9926407 9.81,18.75 C9.80552409,18.4999185 9.67898539,18.3229986 9.44717599,18.2361469 C9.26485393,18.1556809 9.05191298,18.1942911 8.91533009,18.3278301 L8.870625,18.372535 C8.44859642,18.7950334 7.87592081,19.03243 7.27875,19.03243 C6.68157919,19.03243 6.10890358,18.7950334 5.68746499,18.373125 C5.26496665,17.9510964 5.02757002,17.3784208 5.02757002,16.78125 C5.02757002,16.1840792 5.26496665,15.6114036 5.68716991,15.1896699 L5.72635306,15.1505513 C5.86570889,15.008087 5.90431906,14.7951461 5.82064513,14.6054486 C5.74410223,14.426855 5.56881236,14.310769 5.3775,14.31 L5.25,14.31 C4.00735931,14.31 3,13.3026407 3,12.06 C3,10.8173593 4.00735931,9.81 5.25,9.81 C5.50008154,9.80552409 5.67700139,9.67898539 5.76385306,9.44717599 C5.84431906,9.26485393 5.80570889,9.05191298 5.67216991,8.91533009 L5.62746499,8.870625 C5.20496665,8.44859642 4.96757002,7.87592081 4.96757002,7.27875 C4.96757002,6.68157919 5.20496665,6.10890358 5.626875,5.68746499 C6.04890358,5.26496665 6.62157919,5.02757002 7.21875,5.02757002 C7.81592081,5.02757002 8.38859642,5.26496665 8.81033009,5.68716991 L8.84944872,5.72635306 C8.99191298,5.86570889 9.20485393,5.90431906 9.38717599,5.82385306 L9.49484664,5.80114977 C9.65041313,5.71688974 9.7492905,5.55401473 9.75,5.3775 L9.75,5.25 C9.75,4.00735931 10.7573593,3 12,3 C13.2426407,3 14.25,4.00735931 14.25,5.25 L14.249994,5.31450877 C14.250769,5.50881236 14.366855,5.68410223 14.552824,5.76385306 C14.7351461,5.84431906 14.948087,5.80570889 15.0846699,5.67216991 L15.129375,5.62746499 C15.5514036,5.20496665 16.1240792,4.96757002 16.72125,4.96757002 C17.3184208,4.96757002 17.8910964,5.20496665 18.312535,5.626875 C18.7350334,6.04890358 18.97243,6.62157919 18.97243,7.21875 C18.97243,7.81592081 18.7350334,8.38859642 18.3128301,8.81033009 L18.2736469,8.84944872 C18.1342911,8.99191298 18.0956809,9.20485393 18.1761469,9.38717599 L18.1988502,9.49484664 C18.2831103,9.65041313 18.4459853,9.7492905 18.6225,9.75 Z"
                                        id="Combined-Shape" fill="currentColor" opacity="0.3"></path>
                                    <path
                                        d="M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z"
                                        id="Path" fill="currentColor"></path>
                                </g>
                            </svg>
                        </div>
                        <h1 class="mb-3 mt-4 text-lg">Easy Setup</h1>
                        <p class="text-gray-500">Fusce mattis nibh vel tortor scelerisque, a pretium dolor posuere.</p>
                    </div>
                </div>

            </div>
        </div>

        <div class="py-16 lg:py-32 overflow-x-hidden" data-aos="fade-up">
            <div class="container">
                <div class="relative">

                    <div class="lg:absolute lg:max-w-md lg:translate-y-1/2 z-10 mb-14">
                        <div class="bg-white shadow-lg border rounded-lg p-4 w-full">
                            <div class="relative">
                                <div
                                    class="before:w-20 before:h-20 before:absolute before:-bottom-12 before:-start-12 before:-z-10 before:bg-[url('../images/pattern/dot2.svg')] hidden sm:block">
                                </div>

                                <span class="h-14 w-14 bg-primary/10 rounded-md flex justify-center items-center">
                                    <svg class="h-6 w-6 text-primary" viewBox="0 0 24 24" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect id="Rectangle-10" x="0" y="0" width="24" height="24"></rect>
                                            <path
                                                d="M16.3740377,19.9389434 L22.2226499,11.1660251 C22.4524142,10.8213786 22.3592838,10.3557266 22.0146373,10.1259623 C21.8914367,10.0438285 21.7466809,10 21.5986122,10 L17,10 L17,4.47708173 C17,4.06286817 16.6642136,3.72708173 16.25,3.72708173 C15.9992351,3.72708173 15.7650616,3.85240758 15.6259623,4.06105658 L9.7773501,12.8339749 C9.54758575,13.1786214 9.64071616,13.6442734 9.98536267,13.8740377 C10.1085633,13.9561715 10.2533191,14 10.4013878,14 L15,14 L15,19.5229183 C15,19.9371318 15.3357864,20.2729183 15.75,20.2729183 C16.0007649,20.2729183 16.2349384,20.1475924 16.3740377,19.9389434 Z"
                                                id="Path-3" fill="currentColor"></path>
                                            <path
                                                d="M4.5,5 L9.5,5 C10.3284271,5 11,5.67157288 11,6.5 C11,7.32842712 10.3284271,8 9.5,8 L4.5,8 C3.67157288,8 3,7.32842712 3,6.5 C3,5.67157288 3.67157288,5 4.5,5 Z M4.5,17 L9.5,17 C10.3284271,17 11,17.6715729 11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L4.5,20 C3.67157288,20 3,19.3284271 3,18.5 C3,17.6715729 3.67157288,17 4.5,17 Z M2.5,11 L6.5,11 C7.32842712,11 8,11.6715729 8,12.5 C8,13.3284271 7.32842712,14 6.5,14 L2.5,14 C1.67157288,14 1,13.3284271 1,12.5 C1,11.6715729 1.67157288,11 2.5,11 Z"
                                                id="Combined-Shape" fill="currentColor" opacity="0.3"></path>
                                        </g>
                                    </svg>
                                </span>

                                <h4 class="font-medium text-lg my-2">Smart Campaign Monitoring</h4>
                                <p class="text-gray-500">Et harum quidem rerum facilis est et expedita distinctio at
                                    libero tempore cum soluta nobis est eligendi optio cumque.</p>
                                <div class="mt-5 flex items-center">
                                    <a href="#" class="text-primary text-sm">Learn more <i
                                            class="fa-solid fa-arrow-right ms-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="relative">
                        <img src="{{ asset('assets/images/features/marketing.jpg') }}" class="ms-auto rounded">
                        <div
                            class="after:w-20 after:h-20 after:absolute after:-top-8 after:-end-8 after:-z-10 after:bg-[url('../images/pattern/dot5.svg')] hidden sm:block">
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="py-10">
            <div class="container">
                <div class="grid lg:grid-cols-3 grid-cols-1 gap-10 items-center" data-aos="fade-up">

                    <div class="lg:col-span-2">
                        <span class="h-14 w-14 bg-primary/10 rounded-lg flex items-center justify-center">
                            <svg class="h-6 w-6 text-primary" viewBox="0 0 24 24" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                    <path
                                        d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z"
                                        id="Combined-Shape" fill="currentColor"></path>
                                    <path
                                        d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z"
                                        id="Combined-Shape" fill="currentColor" opacity="0.3"></path>
                                </g>
                            </svg>
                        </span>

                        <h1 class="text-3xl/tight font-medium mt-5 mb-4">Advanced Features</h1>
                        <p class="text-gray-500">Aenean sagittis tellus lacus, nec aliquet mi gravida at. Aenean velit
                            purus, consectetur ut lobortis ac, dignissim id mi.</p>
                        <div class="mt-5 flex items-center">
                            <a href="#" class="text-primary text-sm">Learn more <i
                                    class="fa-solid fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>

                    <div class="lg:col-span-1">
                        <div class="bg-white shadow-lg border rounded-lg p-10 lg:w-full md:w-1/2 sm:w-3/4 w-full">
                            <div class="flex flex-col gap-5">

                                <h6 class="flex items-center gap-3 font-medium text-sm">
                                    <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                    Unlimited Campaigns
                                </h6>
                                <h6 class="flex items-center gap-3 font-medium text-sm">
                                    <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                    Detailed Reporting
                                </h6>
                                <h6 class="flex items-center gap-3 font-medium text-sm">
                                    <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                    Auto Schedule Tuning
                                </h6>
                                <h6 class="flex items-center gap-3 font-medium text-sm">
                                    <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                    Smart Analytics
                                </h6>
                                <h6 class="flex items-center gap-3 font-medium text-sm">
                                    <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                    Notifications
                                </h6>
                                <h6 class="flex items-center gap-4 font-medium text-sm">
                                    <i class="fa-solid fa-arrow-right text-xl text-green-500"></i>
                                    <p class="text-sm">And More </p>
                                </h6>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </section>
    <!-- =========== feature Section end =========== -->

    <section class="bg-gradient-to-r from-gray-100/70 to-gray-100/50 relative py-16 lg:py-32">

        <div class="absolute top-0 inset-x-0 hidden sm:block">
            <img src="{{ asset('assets/images/shapes/white-wave.svg') }}" alt="white-wave-svg"
                class="w-full -scale-x-100">
        </div>

        <div class="container">
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-14 items-center" data-aos="fade-up">

                <div class="order-2 lg:order-1">
                    <h1 class="text-3xl/tight font-medium mb-5">Monitor what is being performed anytime</h1>
                    <p class="text-gray-500">Temporibus autem quibusdam et aut officiis debitis aut rerum
                        necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae
                        itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores
                        alias...</p>
                    <div>
                        <button for="Email"
                            class="bg-primary text-white rounded-lg text-sm font-semibold flex-none shadow-lg shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40  px-8 py-3 mt-8">Start
                            Free Trial <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>

                <div class="order-1 lg:order-2">
                    <img src="{{ asset('assets/images/features/marketing4.jpg') }}" alt="marketing4" class="shadow">
                </div>

            </div>
        </div>
    </section>

    <!-- =========== testimonial Section Start =========== -->
    <section class="py-16 lg:py-32 overflow-x-hidden">
        <div class="container" data-aos="fade-up" data-aos-duration="600">
            <div class="grid xl:grid-cols-4 grid-cols-3 gap-10">

                <div class="col-span-3 lg:col-span-1">
                    <span class="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Feedback</span>
                    <h1 class="text-3xl/tight font-medium mt-3 mb-4">What people say</h1>
                    <p class="text-gray-500">Some valuables words from our customers.</p>

                    <div class="flex gap-4 mt-10">
                        <div class="button-prev text-xl transition-all duration-300 hover:text-primary"><i
                                class="fa-solid fa-arrow-left"></i></div>
                        <div class="button-next text-xl transition-all duration-300 hover:text-primary"><i
                                class="fa-solid fa-arrow-right"></i></div>
                    </div>
                </div>

                <div class="col-span-3 lg:col-span-2 xl:col-span-3">
                    <div class="relative">

                        <div class="hidden sm:block">
                            <div
                                class="before:w-24 before:h-24 before:absolute before:-top-8 before:-end-8 before:bg-[url('../images/pattern/dot5.svg')]">
                            </div>
                            <div
                                class="after:w-24 after:h-24 after:absolute after:-bottom-8 after:-start-8 after:bg-[url('../images/pattern/dot2.svg')]">
                            </div>
                        </div>

                        <div id="swiper_one" class="swiper relative">
                            <div class="swiper-wrapper z-10">
                                <div class="swiper-slide p-10 border rounded-xl bg-white shadow">
                                    <i class="fa-solid fa-quote-left text-gray-500 text-5xl"></i>
                                    <p class="my-4">It is one of the very convenient to use project manager ever! I
                                        have tried many project management apps for my daily tasks, but this one is far
                                        better than others. Simply loved it!</p>
                                    <div class="border-b border-gray-200 w-full my-7"></div>
                                    <div class="flex flex-wrap items-center justify-between gap-10">
                                        <div class="flex items-center gap-2">
                                            <img src="{{ asset('assets/images/avatars/img-1.jpg') }}"
                                                class="h-10 w-10 rounded-full">
                                            <div>
                                                <h1 class="text-sm mb-1">Cersei Lannister</h1>
                                                <p class="text-gray-500 text-xs">Senior Project Manager</p>
                                            </div>
                                        </div>
                                        <div>
                                            <img src="{{ asset('assets/images/brands/google.svg') }}" class="w-24">
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide p-10 border rounded-xl bg-white shadow">
                                    <i class="fa-solid fa-quote-left text-gray-500 text-5xl"></i>
                                    <p class="my-4">It is one of the very convenient to use project manager ever! I
                                        have tried many project management apps for my daily tasks, but this one is far
                                        better than others. Simply loved it!</p>
                                    <div class="border-b border-gray-200 w-full my-7"></div>
                                    <div class="flex flex-wrap items-center justify-between gap-10">
                                        <div class="flex items-center gap-2">
                                            <img src="{{ asset('assets/images/avatars/img-2.jpg') }}"
                                                class="h-10 w-10 rounded-full">
                                            <div>
                                                <h1 class="text-sm mb-1">Cersei Lannister</h1>
                                                <p class="text-gray-500 text-xs">Senior Project Manager</p>
                                            </div>
                                        </div>
                                        <div>
                                            <img src="{{ asset('assets/images/brands/amazon.svg') }}" class="w-24">
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide p-10 border rounded-xl bg-white shadow">
                                    <i class="fa-solid fa-quote-left text-gray-500 text-5xl"></i>
                                    <p class="my-4">It is one of the very convenient to use project manager ever! I
                                        have tried many project management apps for my daily tasks, but this one is far
                                        better than others. Simply loved it!</p>
                                    <div class="border-b border-gray-200 w-full my-7"></div>
                                    <div class="flex flex-wrap items-center justify-between gap-10">
                                        <div class="flex items-center gap-2">
                                            <img src="{{ asset('assets/images/avatars/img-3.jpg') }}"
                                                class="h-10 w-10 rounded-full">
                                            <div>
                                                <h1 class="text-sm mb-1">Cersei Lannister</h1>
                                                <p class="text-gray-500 text-xs">Senior Project Manager</p>
                                            </div>
                                        </div>
                                        <div>
                                            <img src="{{ asset('assets/images/brands/lenovo.svg') }}" class="w-24">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- =========== testimonial Section end =========== -->

    <!-- =========== footer Section start =========== -->
    <footer class="bg-gray-100">

        <div class="py-6">
            <div class="container">
                <div class="grid lg:grid-cols-2 items-center">
                    <div>
                        <h1 class="text-2xl font-medium mt-3 mb-2">Ready to get started?</h1>
                        <p class="text-gray-500">Create your free 14-day trial account now</p>
                    </div>
                    <div class="flex flex-wrap items-center justify-start lg:justify-end gap-7 mt-5 lg:mt-0">
                        <button class="flex items-center">
                            <a href="#"
                                class="bg-primary text-white rounded-full hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 py-2 px-4">Try
                                it free for 14 days</a>
                        </button>
                        <a href="#" class="transition-all hover:text-primary">Chat with us</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="border-b"></div>

        <div class="container">

            <div class="grid lg:grid-cols-2 grid-cols-1 gap-14 py-6">
                <div>
                    <a href="index.html">
                        <img src="{{ asset('assets/images/logo-dark.png') }}" class="h-8">
                    </a>
                    <p class="text-gray-500/80 mt-5 w-4/5">Make your web application stand out with high-quality
                        landing page</p>
                </div>

                <div>
                    <div class="flex flex-col sm:flex-row gap-14 flex-wrap sm:flex-nowrap justify-between">

                        <div>
                            <div class="flex flex-col gap-3">
                                <h5 class="mb-3 uppercase">PLATFORM</h5>
                                <div class="text-gray-500/80"><a href="javascript:void(0);">Demo</a></div>
                                <div class="text-gray-500/80"><a href="javascript:void(0);">Pricing</a></div>
                                <div class="text-gray-500/80"><a href="javascript:void(0);">Integrations</a></div>
                                <div class="text-gray-500/80"><a href="javascript:void(0);">Status</a></div>
                            </div>
                        </div>

                        <div>
                            <div class="flex flex-col gap-3">
                                <h5 class="mb-3 uppercase">COMPANY</h5>
                                <div class="text-gray-500/80"><a href="javascript:void(0);">About us</a></div>
                                <div class="text-gray-500/80"><a href="javascript:void(0);">Career</a></div>
                                <div class="text-gray-500/80"><a href="javascript:void(0);">Contact Us</a></div>
                            </div>
                        </div>

                        <div>
                            <div class="flex flex-col gap-3">
                                <h5 class="mb-3 uppercase">LEGAL</h5>
                                <div class="text-gray-500/80"><a href="javascript:void(0);">Usage Policy</a></div>
                                <div class="text-gray-500/80"><a href="javascript:void(0);">Privacy Policy</a></div>
                                <div class="text-gray-500/80"><a href="javascript:void(0);">Terms of Service</a></div>
                                <div class="text-gray-500/80"><a href="javascript:void(0);">Trust</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="border-b"></div>

            <div class="flex justify-center gap-6 py-5">
                <p class="text-gray-500/80 text-sm">
                    <script>
                        document.write(new Date().getFullYear())
                    </script>© Prompt. All rights reserved. Crafted
                    by <a href="#" class="text-gray-800 hover:text-primary transition-all">Coderthemes</a>
                </p>
            </div>
        </div>

    </footer>
    <!-- =========== footer Section end =========== -->

    <!-- =========== Back To Top Start =========== -->
    <button data-toggle="back-to-top"
        class="fixed text-sm rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-primary/20 text-primary flex justify-center items-center">
        <i class="fa-solid fa-arrow-up text-base"></i>
    </button>
    <!-- =========== Back To Top End =========== -->

    <!-- Frost Plugin Js -->
    <script src="{{ asset('assets/libs/@frostui/tailwindcss/frostui.js') }}"></script>

    <!-- Swiper Plugin Js -->
    <script src="{{ asset('assets/libs/swiper/swiper-bundle.min.js') }}"></script>

    <!-- Animation on Scroll Plugin Js -->
    <script src="{{ asset('assets/libs/aos/aos.js') }}"></script>

    <!-- Theme Js -->
    <script src="{{ asset('assets/js/theme.min.js') }}"></script>

</body>

</html>
