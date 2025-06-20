"use client";
import { useState } from "react";

export default function DebugEmail() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const testEmail = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/test-email');
      const data = await response.json();
      setResult(data);
    } catch (error: any) {
      setResult({ error: error.message });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">EmailJS Debug Page</h1>
        
        <div className="mb-8">
          <h2 className="text-xl mb-4">Environment Variables:</h2>
          <div className="bg-gray-900 p-4 rounded font-mono text-sm">
            <p>SERVICE_ID: {process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_ztiq5yj"}</p>
            <p>TEMPLATE_ID: {process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_uzfsjdq"}</p>
            <p>PUBLIC_KEY: {(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "tFGrBssQt92lRU8JF").substring(0, 10)}...</p>
          </div>
        </div>

        <button
          onClick={testEmail}
          disabled={loading}
          className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 disabled:bg-gray-500 mb-8"
        >
          {loading ? "Testing..." : "Test EmailJS API"}
        </button>

        {result && (
          <div className="bg-gray-900 p-4 rounded">
            <h3 className="text-lg mb-2">Result:</h3>
            <pre className="text-sm overflow-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}

        <div className="mt-8">
          <h2 className="text-xl mb-4">Troubleshooting Steps:</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Check if environment variables are loaded correctly above</li>
            <li>Click "Test EmailJS API" to test the connection</li>
            <li>Check your EmailJS dashboard for the email logs</li>
            <li>Verify your template has all required variables: from_name, from_email, company, project_type, budget, timeline, message</li>
            <li>Make sure your EmailJS service is connected to your email provider</li>
            <li>Check if you've exceeded the free tier limit (200 emails/month)</li>
          </ol>
        </div>
      </div>
    </div>
  );
}