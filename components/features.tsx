import { CheckSvg } from "@/components/svg/check-svg";

const features = [
  "Advanced Education (graduate student dissertations, instructor lesson plans)",
  "eLearning (K-12 & HigherEd curriculum, adult/professional learning)",
  "Cover Letter and Resume Writing",
  "Social Media & Blog Posts",
  "Internet-Published Articles",
  "eNewsletters & Press Releases",
  "Technology (technical writing/editing)",
  "Business (executive/C-level presentations & communication pieces)",
  "Books (non-fiction)",
];

export const Features = () => (
  <div className="max-w-5xl mx-auto pb-16 px-4 sm:px-6 lg:pt-16 lg:pb-24 lg:px-8">
    {/* <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-extrabold text-gray-900">We offer…</h2>
      <p className="mt-4 text-lg text-gray-500">
        Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
        Malesuada adipiscing sagittis vel nulla nec.
      </p>
    </div> */}
    <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
      {features.map((feature) => (
        <div key={feature} className="relative">
          {/* <dt> */}
          <CheckSvg className="absolute h-6 w-6 text-green-500" />
          <p className="ml-9 leading-6 font-medium text-gray-900">{feature}</p>
          {/* </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">
                {feature.description}
              </dd> */}
        </div>
      ))}
    </dl>
  </div>
);
