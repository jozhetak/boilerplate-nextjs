import React from 'react'
import PropTypes from 'prop-types'

import withI18next from '../hoc/withI18next'
import Layout from '../layouts'
import Hello from '../components/Hello'

const Index = ({ t }) => (
  <Layout>
    <Hello word={t('common:word')} />
  </Layout>
)

Index.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withI18next(['common'])(Index)
