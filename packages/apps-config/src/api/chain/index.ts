// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import uart from '../spec/uart';
import Beresheet from './beresheet';
import Phala from './phala';

// alphabetical, based on the actual displayed name
export default {
  Beresheet,
  'Phala PoC-3': Phala,
  uniarts: uart
};
