<template>
  <div class="w-full">
    <ListItem v-for="contact in contacts" :key="contact.id">
      <div class="flex items-center gap-2">
        <div
          @click="viewContact(contact.id)"
          class="flex items-center border border-gray-200 rounded p-1 cursor-pointer bg-blue-500"
        >
          <img src="/public/binocularsIcon.svg" alt="Visualizar" />
        </div>
        <span>{{ contact.name }}</span>
      </div>
      <template #actions>
        <button
          @click="editContact(contact.id)"
          class="px-5 py-2 border rounded border-blue-800"
        >
          Editar
        </button>
        <button
          @click="removeContact(contact.id)"
          class="px-5 py-2 border rounded border-blue-800"
        >
          Excluir
        </button>
      </template>
    </ListItem>
  </div>
  <UIButton @click="addContact">Adicionar Contato</UIButton>
</template>

<script setup lang="ts">
import ListItem from '~/components/ListItem.vue';
import useContacts from '~/composables/useContacts';

const router = useRouter();
const { contactsList, deleteContact } = useContacts();
const contacts = contactsList();

function addContact () {
  router.push('/form');
};

const editContact = (id) => {
  router.push({ path: '/form', query: { id } });
}

const removeContact = (id) => {
  deleteContact(id);
}

const viewContact = (id) => {
  router.push(`/contact/${id}`);
}

</script>
