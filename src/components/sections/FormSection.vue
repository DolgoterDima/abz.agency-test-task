<template>
  <section class="form-section" id="sign-up-section">
    <template v-if="userRegistrationStatus.success">
      <div class="form-section__success-block">
        <h2 class="form-section__title">
          {{ userRegistrationStatus.success }}
        </h2>
        <img
          src="@/assets/images/success-image.png"
          alt=""
          class="form-section__image"
        />
      </div>
    </template>
    <template v-else>
      <h2 class="form-section__title">Working with POST request</h2>

      <form class="form-section__form" @submit.prevent="onSubmit()" ref="form">
        <ValidationProvider
          rules="name"
          v-slot="{ errors }"
          tag="div"
          class="form-section__input"
        >
          <UiInput
            class="form-section__input"
            label="Your name"
            v-model="form.name"
            :errors="errors"
            @input="(val) => (form.name = val)"
          />
        </ValidationProvider>

        <ValidationProvider
          rules="email"
          v-slot="{ errors }"
          tag="div"
          class="form-section__input"
        >
          <UiInput
            class="form-section__input"
            label="Email"
            v-model="form.email"
            :errors="errors"
            @input="(val) => (form.email = val)"
          />
        </ValidationProvider>

        <ValidationProvider
          rules="phone"
          v-slot="{ errors }"
          tag="div"
          class="form-section__input"
        >
          <UiInput
            class="form-section__input"
            label="Phone"
            v-model="form.phone"
            @input="(val) => (form.phone = val)"
            :errors="errors"
            helper-text="+38 (XXX) XXX - XX - XX"
          />
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          tag="div"
          class="form-section__input form-section__input--radio"
        >
          <span class="form-section__label"> Select your position </span>
          <UiRadio
            name="position"
            class="form-section__input"
            :data="positionsArr"
            @change="(val) => (form.position_id = val)"
          />
        </ValidationProvider>

        <ValidationProvider
          ref="validator"
          v-slot="{ errors }"
          tag="div"
          rules="size|ext|dimensions"
          class="form-section__input form-section__input--file"
        >
          <UiFile @file-uploaded="selected" :errors="errors" />
        </ValidationProvider>
        <span
          class="form-section__error"
          v-if="userRegistrationStatus.error"
          v-html="userRegistrationStatus.error"
        >
        </span>
        <button
          type="submit"
          class="form-section__button button"
          :disabled="!isAllFormFilled"
          :class="!isAllFormFilled && 'button--disabled'"
        >
          Sign up
        </button>

        <UiPreloader v-if="userRegistrationStatus.isLoaderShow" />
      </form>
    </template>
  </section>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "FormSection",
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        position_id: "1",
        photo: "",
      },
      positionsArr: [],
      isAllFormFilled: false,
      userRegistrationStatus: {
        error: "",
        success: "",
        isLoaderShow: false,
      },
    };
  },
  watch: {
    form: {
      handler(newValue, oldValue) {
        /* check if all fields are filled */
        this.isAllFormFilled = Object.values(oldValue).every(
          (item) => item !== ""
        );
      },
      deep: true,
    },
  },
  methods: {
    ...mapActions("users", ["sendFormData", "fetchUsersAction"]),

    async selected(photo) {
      /* set photo */
      const { valid } = await this.$refs.validator.validate(photo);
      if (valid) this.form.photo = photo;
    },

    async fetchPositions() {
      const response = await fetch(
        "https://frontend-test-assignment-api.abz.agency/api/v1/positions"
      );
      const positionsInfo = await response.json();
      this.positionsArr = positionsInfo.positions;
    },
    onSubmit() {
      if (this.isAllFormFilled) {
        this.userRegistrationStatus.isLoaderShow = true;
        this.sendFormData(this.form)
          .then((data) => {
            if (data.success) {
              this.userRegistrationStatus.success =
                "User successfully registered";

              this.fetchUsersAction();
            } else {
              const errorsList = Object.values(data.fails)
                .map((value) => {
                  return `${value} <br>`;
                })
                .join("");
              this.userRegistrationStatus.error = `${data.message}<br>${errorsList}`;
            }

            this.userRegistrationStatus.isLoaderShow = false;
          })
          .catch((error) => console.error(error));
      }
    },
  },
  mounted() {
    this.fetchPositions();
  },
};
</script>
