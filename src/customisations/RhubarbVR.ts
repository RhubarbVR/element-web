/*
Copyright 2021 The Matrix.org Foundation C.I.C.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

function getDisplayAliasForAliasSet(canonicalAlias: string, altAliases: string[]): string {
    // E.g. prefer one of the aliases over another
    return null;
}

// This interface summarises all available customisation points and also marks
// them all as optional. This allows customisers to only define and export the
// customisations they need while still maintaining type safety.
export interface IAliasCustomisations {
    getDisplayAliasForAliasSet?: typeof getDisplayAliasForAliasSet;
}

// A real customisation module will define and export one or more of the
// customisation points that make up `IAliasCustomisations`.
export default {} as IAliasCustomisations;