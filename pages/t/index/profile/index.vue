<template>
  <layout-logged>
    <h1 slot="title" class="text-muted">Profile</h1>
    <div slot="inner" class="container-fluid">
      <b-row>
        <b-col lg="4">
          <picture-profile-card />
        </b-col>
        <b-col lg="8">
          <user-information :user="$auth.user" />
        </b-col>
        <b-col lg="8">
          <update-password-card />
        </b-col>
        <b-col lg="4">
          <my-teaching-classes />
        </b-col>
      </b-row>
    </div>
  </layout-logged>
</template>

<script>
import LayoutLogged from "@/layouts/layout-logged";
import PictureProfileCard from "@/components/profile/pictureProfileCard";
import UpdatePasswordCard from "@/components/forms/updatePasswordForm";
import UserInformation from "@/components/profile/userInformation";
import MyTeachingClasses from "@/components/classes/myTeachingClasses";
export default {
 name: "index",
  components: {MyTeachingClasses, UserInformation, UpdatePasswordCard, PictureProfileCard, LayoutLogged}
}
</script>
