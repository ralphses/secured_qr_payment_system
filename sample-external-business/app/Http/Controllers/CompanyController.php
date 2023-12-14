<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class CompanyController extends Controller
{
    public function settings(Request $request)
    {
        if ($request->method() == 'GET') {
            $company = Company::find(1);
            return response()->view('settings', compact('company'));
        } else {
            $apiKey = $request->input('company_api');
            $name = $request->input('company_name');
            $address = $request->input('company_address');
            $email = $request->input('email');

            $company = Company::where('email', $email)->first();
            $company->update([
                'name' => $name,
                'email' => $email,
                'address' => $address,
                'api_key' => $apiKey
            ]);
        }

        return response()->redirectTo(route('dashboard'));
    }

    public function index(Request $request)
    {
        //fetch asll QR codes
        $url = env('QR_CODER_SERVER_BASE_URL') . "/qr";

        $company = Company::find(1);
        $response = Http::withToken($company->api_key)
            ->get('http://localhost:8080/api/v1');

        $codes = $response->json()['data']['codes'] ?? [];

        return response()->view('dashboard', compact('codes'));

        
    }

    public function createQr(Request $request)
    {

        $url = env('QR_CODER_SERVER_BASE_URL') . "/qr";

        $company = Company::find(1);
        $response = Http::withToken($company->api_key)
            ->post($url, ['checkOutUrl' => $request->input('checkout_url'), 'amount' => $request->input('amount'), 'item' => $request->input('item')]);

        // dd($response->status());
        return back()->with('created', 'yest');
    }
}


