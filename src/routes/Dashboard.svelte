<!--<script lang="ts">-->
<!--  import client from '../lib/apolloClient';-->
<!--  import { gql } from '@apollo/client';-->
<!--  import { onMount } from 'svelte';-->
<!--  import type { Department } from '../types';-->

<!--  let departments: Department[] = [];-->

<!--  const GET_DEPARTMENTS = gql`-->
<!--    query GetDepartments {-->
<!--      departments {-->
<!--        departmentId-->
<!--        name-->
<!--      }-->
<!--    }-->
<!--  `;-->

<!--  onMount(async () => {-->
<!--    const { data } = await client.query({ query: GET_DEPARTMENTS });-->
<!--    departments = data.departments;-->
<!--  });-->
<!--</script>-->

<!--<div>-->
<!--  &lt;!&ndash; Your UI elements here &ndash;&gt;-->
<!--</div>-->
