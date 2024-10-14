<template>
  <div class="w-full p-4 border border-gray-200 flex flex-col gap-2 my-2">
    <h1 class="text-2xl font-bold">Contato</h1>
    <p><span class="font-bold">Nome:</span> {{ contact.name }}</p>
    <p><span class="font-bold">Email:</span> {{ contact.email }}</p>
    <p><span class="font-bold">Telefone:</span> {{ contact.phone }}</p>
  </div>
  <NuxtLink to="/">
  <UIButton>Voltar</UIButton>
  </NuxtLink>
</template>

<script setup lang="ts">
const route = useRoute();
const id = route.params.id;
const { getContatcById } = useContacts();

const contact = reactive({
  id: "",
  name: "",
  email:"",
  phone: ""
})

onMounted(() => {
  if (id) {
    const { name, email, phone } = getContatcById(id);
    contact.id = id;
    contact.name = name;
    contact.email = email;
    contact.phone = phone;
  }
})
</script>
