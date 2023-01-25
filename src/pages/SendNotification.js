import Sidebar from "../partials/Sidebar";
import { useState } from "react";
export const SendNotification = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <section class="text-gray-600 body-font overflow-hidden">
          {/*Send Notification*/}
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
                  Send Notification
                </h1>
                <p class="leading-relaxed mb-4">
                  Enter the information and icon you'd like to send your
                  subscribers!
                </p>
                <div class="flex border-t border-gray-200 py-2">
                  <div class="p-2 w-full">
                    <div class="relative">
                      <label
                        for="message"
                        class="leading-7 text-sm text-gray-600"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="flex border-t border-gray-200 py-2">
                  <span class="text-gray-500">
                    Select Subscribers to send to
                  </span>
                  <span class="ml-auto text-gray-900">Dropdown</span>
                </div>
                <div class="flex">
                  <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Send Now!
                  </button>
                </div>
              </div>
              <div>
              <h2>Preview</h2>
              <img
                alt="ecommerce"
                class=" w-full lg:h-auto h-64 object-cover object-center rounded"
                src="https://dummyimage.com/400x400"
              />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
