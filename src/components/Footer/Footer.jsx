/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
export default function Footer() {
    return (
        <footer className="bg-neutral-black py-10 text-white">
            <div className="container mx-auto px-4 space-y-6 flex justify-center">
                <a href="#" className="flex items-center">
                    <p className="text-sm">
                        &copy; 2025{' '}
                        <span className="font-semibold mx-1">
                            Accounting Global Solutions
                        </span>
                        All rights reserved.
                    </p>
                </a>
            </div>
        </footer>
    );
}
