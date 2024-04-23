"use client";

import React from 'react';
import { useUserAuth } from './_utils/auth-context';

function LandingPage() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleLogin = async () => {
        await gitHubSignIn();
    };

    const handleLogout = async () => {
        await firebaseSignOut();
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
            <div className="text-center">
                {user ? (
                    <div>
                        <p className="mb-4 text-lg">Welcome, {user.displayName} ({user.email})</p>
                        <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded ">
                            Logout
                        </button>
                        <div className="mt-4">
                            <a href="/week-8/shopping-list" className="text-blue-400 hover:text-blue-600">Go to Shopping List </a>
                        </div>
                    </div>
                ) : (
                    <div>
                        <button onClick={handleLogin} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded ">
                            Login with GitHub
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LandingPage;
