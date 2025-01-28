import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="data:image/jpeg;base64,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"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                          accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                          aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                      </p>
                      <p className="mt-4 text-gray-600">
                          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}