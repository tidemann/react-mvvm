import {InjectionToken} from 'tsyringe';
import {IApiClient} from '@interfaces/IApiClient';
import {QueryClient} from '@tanstack/react-query';
import {IToyModel} from '@models/ToyModel';

export const IApiClientToken: InjectionToken<IApiClient> = Symbol('IApiClient');
export const ToyModelToken: InjectionToken<IToyModel> = Symbol('ToyModel');
export const QueryClientToken: InjectionToken<QueryClient> = Symbol('QueryClient');
export const RouterToken: InjectionToken = Symbol('Router');
