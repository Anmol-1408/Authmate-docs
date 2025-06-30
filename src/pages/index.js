import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { motion } from 'framer-motion';
import Head from '@docusaurus/Head';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className="relative overflow-hidden min-h-screen
      bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
      text-white dark:text-gray-100"
    >
      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-black/5 dark:bg-black/30 z-0" />

      {/* Background decorative motion elements */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl
          dark:bg-gray-700 dark:opacity-20"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl
          dark:bg-gray-700 dark:opacity-20"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
      />

      {/* Background image with improved visibility */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60 z-0"
        src="/img/hero.png"
        alt="Background pattern"
      />

      {/* Hero content centered */}
      <div className="container mx-auto px-4 text-center relative z-10 flex flex-col justify-center items-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6
            bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400"
          >
            {siteConfig.title}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 dark:opacity-80 leading-relaxed dark:text-gray-300">
            {siteConfig.tagline}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              className="bg-white text-blue-700 hover:bg-blue-100
                dark:bg-gray-700 dark:text-white dark:hover:bg-gray-500
                font-semibold py-4 px-8 rounded-lg shadow-md transition-all duration-300"
              to="/docs/intro"
            >
              Get Started with {siteConfig.title}
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              className="bg-gray-600 border-2 border-gray-400 text-white hover:bg-gray-700
                dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-700
                font-semibold py-4 px-8 rounded-lg shadow-md transition-all duration-300"
              to="/docs/intro"
            >
              View Documentation
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="mt-16"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="text-white dark:text-gray-300 text-sm select-none">Scroll down ↓</span>
        </motion.div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      <Head>
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1f2937" media="(prefers-color-scheme: dark)" />
      </Head>

      <Layout
        title={`${siteConfig.title}`}
        description="Secure authentication docs for developers"
      >
        <HomepageHeader />
        <main className="relative
          bg-gradient-to-b from-gray-50 to-white
          dark:from-gray-900 dark:to-gray-800
          py-20"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 opacity-5 rounded-full blur-3xl
              dark:bg-blue-800 dark:opacity-20"
            />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-500 opacity-5 rounded-full blur-3xl
              dark:bg-indigo-800 dark:opacity-20"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="container mx-auto px-4 relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose {siteConfig.title}?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Discover the features that make our authentication solution stand out from the rest
              </p>
            </motion.div>

            <HomepageFeatures />
          </motion.div>
        </main>
      </Layout>
    </>
  );
}
