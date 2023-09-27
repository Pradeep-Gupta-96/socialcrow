import React from 'react'

const Clients = () => {
    return (
        <>
            <h2>Our Successful Clients:</h2>
            <div className="all-card">
            <div className="Testimonials_slide__MS7Xr" style={{ background: 'repeating-radial-gradient(circle at 0px 0px, transparent 0px, rgb(86, 92, 255) 35px), repeating-linear-gradient(rgba(68, 76, 247, 0.333), rgb(68, 76, 247)) rgb(86, 92, 255)' }}>
      <div className="font-cera flex h-full w-full flex-col justify-between text-white">
        <div className="flex w-full justify-between">
          <div className="flex flex-col justify-items-center">
            <p>Entrepreneur</p>
            <p className="text-2xl font-bold">Grant Cardone</p>
            <p className="-mt-1 text-sm opacity-70">@GrantCardone</p>
          </div>
          <div className="h-20 w-20">
            <img
              alt="client"
              loading="lazy"
              width="150"
              height="150"
              decoding="async"
              data-nimg="1"
              className="rounded-full"
              style={{ color: 'transparent' }}
              srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrant.f183f2f4.jpg&amp;w=256&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrant.f183f2f4.jpg&amp;w=384&amp;q=75 2x"
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrant.f183f2f4.jpg&amp;w=384&amp;q=75"
            />
          </div>
        </div>
        <div className="flex justify-between space-x-2">
          <div>
            <p>Client Since</p>
            <p className="text-2xl">Sep 2022</p>
          </div>
          <div className="flex space-x-4">
            <div>
              <p>Followers</p>
              <p className="text-2xl">3M</p>
            </div>
            <div>
              <p>Growth</p>
              <p className="du text-2xl">+114k</p>
            </div>
          </div>
        </div>
      </div>
    </div>
            </div>
            

            <h2>Check out 60,000+ more successful clients that used our services</h2>
        </>
    )
}

export default Clients