import React from 'react';

const AreasWeCover = () => {
  return (
    <div className="bg-gray-100 mt-12">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Areas We Cover</h2>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Fiction</h3>
              <ul className="text-gray-600">
                <li>Science fiction and fantasy</li>
                <li>Romance and drama</li>
                <li>Mystery and thriller</li>
                <li>Historical fiction</li>
                <li>Young adult fiction</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Non-Fiction</h3>
              <ul className="text-gray-600">
                <li>Biographies and memoirs</li>
                <li>Self-help and personal development</li>
                <li>Business and finance</li>
                <li>Health and wellness</li>
                <li>Travel and adventure</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Children's Books</h3>
              <ul className="text-gray-600">
                <li>Picture books</li>
                <li>Early readers</li>
                <li>Middle-grade fiction</li>
                <li>Young adult fiction</li>
                <li>Interactive and educational books</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Academic</h3>
              <ul className="text-gray-600">
                <li>Textbooks and educational materials</li>
                <li>Research publications</li>
                <li>Academic journals</li>
                <li>Theses and dissertations</li>
                <li>Course materials</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-600 mt-8 text-center">
            This is just a glimpse of the wide array of genres and topics we cover. We continuously strive to expand our offerings to cater to the diverse interests of our readers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AreasWeCover;
