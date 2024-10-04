import {container} from 'tsyringe';
import {ApiClient} from '@api/clients/ApiClient';
import {ToyModel} from '@models/ToyModel';
import router from "@routes/router.ts";
import {queryClient} from '@api/index.ts';
import {IApiClientToken, ToyModelToken, QueryClientToken, RouterToken,} from './tokens';

// Register dependencies
container.registerSingleton(IApiClientToken, ApiClient);
container.register(ToyModelToken, {useClass: ToyModel});
container.registerInstance(QueryClientToken, queryClient);
container.registerInstance(RouterToken, router);
