<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>Create New QR code | Prompt </title>
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

<body class="bg-slate-100 tracking-wide">

    <div class="min-h-screen flex items-center justify-center">
        <div class="container" style="width: 50%">
            <div>
                <div class="bg-white shadow rounded mb-6">
                    <div class="grid md:grid-cols-6">
                        <div class="bg-white shadow-md p-12 rounded-s xl:col-span-5 md:col-span-6">
                            <div class="mb-12">
                                <a href="{{ route('dashboard') }}">
                                    <img src="{{ asset('assets/images/logo-dark.png') }}" alt="logo-img" class="h-8">
                                </a>
                            </div>
                            <h6 class="text-base/[1.6] font-semibold text-gray-600 mb-0 mt-4">Create a new QR Code</h6>
                            <p class="text-gray-500 text-sm/[1.6] mt-1 mb-6">Enter the details for your new QR Code.</p>
                            <form action="{{ route('create.qrcode') }}" method="POST">
                                @csrf
                                <div class="mb-4">
                                    <label for="checkout_url"
                                        class="block text-sm font-medium mb-1 text-gray-600">Checkout URL
                                        <small>*</small></label>
                                    <input type="url" id="checkout_url" name="checkout_url"
                                        class="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0"
                                        placeholder="Checkout URL">
                                </div>

                                <div class="mb-4">
                                    <label for="item" class="block text-sm font-medium mb-1 text-gray-600">Item
                                        <small>*</small></label>
                                    <input type="text" id="item" name="item"
                                        class="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0"
                                        placeholder="Item">
                                </div>

                                <div class="mb-4">
                                    <label for="amount" class="block text-sm font-medium mb-1 text-gray-600">Amount
                                        <small>*</small></label>
                                    <input type="number" id="amount" name="amount" min="0"
                                        class="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0"
                                        placeholder="Amount">
                                </div>

                                <div class="mb-0 text-center">
                                    <button
                                        class="w-full bg-primary text-white font-medium leading-6 text-center align-middle select-none py-2 px-4 text-base rounded-md transition-all hover:shadow-lg hover:shadow-primary/30"
                                        type="submit">Create QR Code</button>
                                </div>
                            </form>
                        </div>
                        <!-- Add your other content here if needed -->
                    </div>
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

    @if(session('created'))
    <div id="successModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-6 rounded shadow-md text-center">
            <p class="text-green-500 font-semibold text-lg mb-4">QR code generated Successfully!</p>
            <button onclick="redirectToDashboard()"
                class="bg-primary text-white px-4 py-2 rounded-md">Okay</button>
        </div>
    </div>
    <script>
        // Function to redirect to the dashboard after clicking "Okay"
        function redirectToDashboard() {
            window.location.href = "{{ route('dashboard') }}";
        }
    </script>
    @endif

</body>

</html>
