'use client'
import QRCode from 'qrcode.react';
import React from 'react';
import Image from 'next/image';


const QRCodeComponent = ({ UrlText }) => {


    return (

        <div className='flex justify-center items-center'>
            <div className='relative  bg-white  max-[480px]:hidden'>
                <QRCode
                    value={UrlText}
                    size={80}
                    bgColor={'#ffffff'}
                    fgColor={'#202e55'}
                    level={'H'}
                    className='p-1 text-orange-700'
                />
                <Image
                    src="/images/Logo_CTM.webp" // Ruta a tu logotipo
                    alt="Logo"
                    width={20}
                    height={20}

                    className="absolute w-8 h-8 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" // Centrar el logotipo en el código QR
                    style={{
                        margin: 'auto',
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
            </div>
            <div className='relative  bg-white  min-[480px]:hidden'>
                <QRCode
                    value={UrlText}
                    size={55}
                    bgColor={'#ffffff'}
                    fgColor={'#202e55'}
                    level={'H'}
                    className='p-1 text-orange-700'
                />
                <Image
                    src="/images/Logo_CTM.webp" // Ruta a tu logotipo
                    alt="Logo"
                    width={20}
                    height={20}

                    className="absolute w-8 h-8 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" // Centrar el logotipo en el código QR
                    style={{
                        margin: 'auto',
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
            </div>


        </div>
    );
};

export default QRCodeComponent;
