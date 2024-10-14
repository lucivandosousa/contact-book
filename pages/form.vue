<template>
  <div class="w-full p-4 border border-gray-200 flex flex-col gap-2 my-2">
    <form @submit.prevent="">
      <UIInput
        label="Nome"
        type="text"
        v-model="contact.name"
      />
      <UIInput
        label="Email"
        type="text"
        v-model="contact.email"
      />
      <UIInput
        label="Telefone"
        type="text"
        v-model="contact.phone"
      />
      <UIButton
        @click="saveContact"
        type="submit"
      >
        Salvar Contato
      </UIButton>
    </form>
  </div>
</template>

<script setup lang="ts">
const { createContact, updateContact, getContatcById } = useContacts();
const route  = useRoute();
const router = useRouter();

const contact = reactive({
  id: "",
  name: "",
  email:"",
  phone: ""
})

onMounted(() => {
  const id = route.query.id;
  if (id) {
    const { name, email, phone } = getContatcById(id);
    contact.id = id;
    contact.name = name;
    contact.email = email;
    contact.phone = phone;
  }
})

const saveContact = () => {
  if (contact.id) {
    console.log("editando");
    updateContact(contact.id, contact);
  } else {
    console.log(contact);
    createContact(contact);
  }
  router.push('/');
}
</script>
