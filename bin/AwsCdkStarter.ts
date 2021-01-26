#!/usr/bin/env node
import { App } from '@aws-cdk/core'
import { AwsCdkStarterCdkPipelineStack } from '../lib'

const app = new App()
new AwsCdkStarterCdkPipelineStack(app, 'AwsCdkStarterCdkPipelineStack')
