import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { motion } from 'framer-motion';

const FeatureList = [
  {
    title: 'Quick Integration',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Effortless API integration with full guides to get your authentication system live fast.
      </>
    ),
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Powerful Dashboard',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Manage users easily across all your projects from a single, intuitive dashboard.
      </>
    ),
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    title: 'Enterprise Security',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Bank-grade security with unique API keys for each project to enhance control.
      </>
    ),
    color: 'from-purple-500 to-purple-600',
  },
];

function Feature({ Svg, title, description, color, index }) {
  return (
    <motion.div 
      className="col col--4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="group relative">
        <div className={clsx(
          'absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300',
          color
        )} />
        <div className="relative p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 hover:shadow-xl">
          <div className="text--center mb-6">
            <div className="inline-block p-4 rounded-xl bg-gray-50 dark:bg-gray-800 mb-4">
              <Svg className={clsx(styles.featureSvg, 'w-16 h-16')} role="img" />
            </div>
          </div>
          <div className="text--center">
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
    <section className={styles.features}>
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
