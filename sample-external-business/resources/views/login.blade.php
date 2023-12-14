<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>Login your account | Prompt - Tailwind CSS Multipurpose Landing Page Template</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="A fully responsive Tailwind CSS Multipurpose agency, application, business, clean, creative, cryptocurrency, it solutions, startup, career, blog, modern, creative, multipurpose, portfolio, saas, software, tailwind css, etc." name="description" />
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

<body class="bg-slate-100 tracking-wide" >

    <div class="min-h-screen flex items-center justify-center">
        <div class="container" style="width: 50%">
            <div >
                <div class="bg-white shadow rounded mb-6">
                    <div class="grid md:grid-cols-6">
                        <div class="bg-white shadow-md p-12 rounded-s xl:col-span-5 md:col-span-6">
                            <div class="mb-12">
                                <a href="{{ route('welcome') }}">
                                    <img src="{{ asset('assets/images/logo-dark.png') }}" alt="logo-img" class="h-8">
                                </a>
                            </div>
                            <h6 class="text-base/[1.6] font-semibold text-gray-600 mb-0 mt-4">Welcome back!</h6>
                            <p class="text-gray-500 text-sm/[1.6] mt-1 mb-6">Enter your email address and password to access admin panel.</p>
                            <form action="{{ route('login') }}" method="POST">
                                @csrf
                                <div class="mb-4">
                                    <label for="email" class="block text-sm font-medium mb-1 text-gray-600">Email <small>*</small></label>
                                    <input type="email" id="email" name="email" class="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0" placeholder="Your email">
                                </div>

                                <div class="mb-4">
                                    <a href="account-forget-password.html" class="float-right text-gray-500 text-xs border-b border-dashed pb-1 ms-1">Forgot your password?</a>
                                    <label for="password" class="block text-sm font-medium mb-1 text-gray-600">Password <small>*</small></label>
                                    <input type="password" id="password" name="password" class="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0" placeholder="Enter your password">
                                </div>

                                <div class="flex items-center mb-4">
                                    <input id="remember" type="checkbox" class="shrink-0 border-gray-400 rounded text-blue-600">
                                    <label for="remember" class="text-xs/none text-gray-700 font-medium ms-3">Remember me</label>
                                </div>

                                <div class="mb-0 text-center">
                                    <button class="w-full bg-primary text-white font-medium leading-6 text-center align-middle select-none py-2 px-4 text-base rounded-md transition-all hover:shadow-lg hover:shadow-primary/30" type="submit">Log In</button>
                                </div>
                            </form>

                            <div class="py-4 text-center"><span class="fs-13 fw-bold">OR</span></div>

                            <div class="w-full">
                                <a href="" class="block border text-gray-500 font-medium leading-6 text-center align-middle select-none py-2 px-4 text-sm rounded-md transition-all hover:shadow-md">
                                    <span class="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github icon icon-xs me-2">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                        Github
                                    </span>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="w-full text-center">
                    <p class="text-gray-500 leading-6 text-base">Don't have an account? <a href="account-signup.html" class="text-primary font-semibold ms-1">Sign Up</a></p>
                </div>
            </div>
        </div>
    </div>

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