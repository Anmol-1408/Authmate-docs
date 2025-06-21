import clsx from 'clsx';
import Heading from '@theme/Heading';
import { motion } from 'framer-motion';

const FeatureList = [
  {
    title: 'Quick Integration',
    img: '/img/QuickIntegration.png',
    description: (
      <>
        Seamless integration with your existing systems, allowing you to focus on building features.
      </>
    ),
    color: 'bg-gradient-to-br from-yellow-500 to-yellow-600 dark:from-yellow-400 dark:to-yellow-500',
  },
  {
    title: 'Powerful Dashboard',
    img: '/img/PowerfulDashboard.png',
    description: (
      <>
        A user-friendly dashboard to manage your authentication settings and monitor usage.
      </>
    ),
    color: 'bg-gradient-to-br from-green-500 to-green-600 dark:from-green-400 dark:to-green-500',
  },
  {
    title: 'Enterprise Security',
    img: '/img/EnterpriseSecurity.png',
    description: (
      <>
        Bank-grade security with unique API keys for each project to enhance control.
      </>
    ),
    color: 'bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500',
  },
];

function Feature({ title, description, color, index, img }) {
  return (
    <motion.div 
      className="col col--4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="group relative">
        <div
          className={clsx(
            'absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300',
            color
          )}
        />
        <div className="relative p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 hover:shadow-xl bg-white dark:bg-gray-900">
          <div className="text-center mb-6">
            <img
              src={img}
              alt={title}
              className="w-28 h-28 md:w-32 md:h-32 object-contain mx-auto mb-4"
            />
          </div>
          <div className="text-center">
            <Heading as="h3" className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              {title}
            </Heading>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className="flex items-center py-8 w-full">
      <div className="container">
        <div className="row gap-8">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
