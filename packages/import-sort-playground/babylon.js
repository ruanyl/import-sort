import type {AccountType} from '../../../types/thrift/yellow/yellow';
import {connectToStyles} from '@uber/superfine-react';
import isEqual from 'lodash/isEqual';
import {LocationMap} from './map';
import LocationModal from './location-modal';
import {matches} from './utils';
import {NEW_LOCATION_UUID} from './constants';
import React from 'react';
import ReactDOM from 'react-dom';
import Search from '@uber/react-inline-icons/search';
import type {SuperfineStylePropType} from '../../../util/types';
import t from '../../../util/i18n';
import {TextInput} from '@uber/react-inputs';